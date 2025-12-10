import { getProduct } from '../utils/products'
import { generateDownloadToken } from '../utils/downloadTokens'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const config = useRuntimeConfig(event);
    
    // Validate required fields
    const { reference, productId, email, customerName } = body
    
    if (!reference || !productId || !email || !customerName) {
      return {
        statusCode: 400,
        body: { 
          success: false,
          error: 'Missing required fields: reference, productId, email, customerName' 
        }
      }
    }

    // Validate product exists
    const product = getProduct(productId)
    if (!product) {
      return {
        statusCode: 400,
        body: { 
          success: false,
          error: 'Invalid product ID' 
        }
      }
    }

    // Verify payment with Paystack API
    const paystackSecretKey = config.paystackSecretKey
    if (!paystackSecretKey) {
      console.error('Paystack secret key not configured')
      return {
        statusCode: 500,
        body: { 
          success: false,
          error: 'Payment verification not configured' 
        }
      }
    }

    const verifyResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${paystackSecretKey}`
        }
      }
    )
    
    const verifyData = await verifyResponse.json()
    
    if (!verifyData.status || verifyData.data.status !== 'success') {
      console.error('Paystack verification failed:', verifyData)
      return {
        statusCode: 400,
        body: { 
          success: false,
          error: 'Payment verification failed. Please contact support if you were charged.' 
        }
      }
    }

    // Verify the amount matches expected product price (in kobo)
    // const expectedAmount = product.price * 100
    const expectedAmount = 200 * 100
    if (verifyData.data.amount !== expectedAmount) {
      console.error('Amount mismatch:', { expected: expectedAmount, received: verifyData.data.amount })
      return {
        statusCode: 400,
        body: { 
          success: false,
          error: 'Payment amount mismatch. Please contact support.' 
        }
      }
    }

    // Generate secure download token
    const tokenData = generateDownloadToken(productId, email, reference)
    
    // Generate download URL
    const baseUrl = getRequestURL(event).origin
    const downloadUrl = `${baseUrl}/api/download?token=${tokenData.token}`

    return {
      statusCode: 200,
      body: {
        success: true,
        downloadToken: tokenData.token,
        downloadUrl,
        expiresAt: tokenData.expiresAt,
        maxDownloads: tokenData.maxDownloads,
        product: {
          name: product.name,
          fileName: product.fileName
        }
      }
    }
  } catch (error) {
    console.error('Payment verification error:', error)
    
    return {
      statusCode: 500,
      body: { 
        success: false,
        error: 'Failed to process payment verification',
        details: error.message 
      }
    }
  }
})
