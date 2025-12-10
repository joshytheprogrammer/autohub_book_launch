import nodemailer from 'nodemailer'
import { getProduct } from '../utils/products'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate required fields
    const { email, customerName, productId, downloadUrl, reference } = body
    
    if (!email || !customerName || !productId || !downloadUrl || !reference) {
      return {
        statusCode: 400,
        body: { 
          success: false,
          error: 'Missing required fields' 
        }
      }
    }

    // Get product info
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

    // Small delay to ensure stable connection after payment processing
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Create transporter using SMTP with extended timeouts
    const transporter = nodemailer.createTransport({
      host: 'iredmail.autohub.africa',
      port: 587,
      secure: false,
      auth: {
        user: 'info@autohub.africa',
        pass: 'ZD2Gg(k4Jw'
      },
      tls: {
        rejectUnauthorized: false
      },
      // Extended timeout settings
      connectionTimeout: 30000,
      greetingTimeout: 30000,
      socketTimeout: 60000
    })

    // Verify connection with retry
    let verified = false
    let attempts = 0
    const maxAttempts = 3
    
    while (!verified && attempts < maxAttempts) {
      try {
        await transporter.verify()
        verified = true
      } catch (verifyError) {
        attempts++
        console.log(`SMTP verify attempt ${attempts} failed:`, verifyError.message)
        if (attempts < maxAttempts) {
          await new Promise(resolve => setTimeout(resolve, 2000))
        } else {
          throw verifyError
        }
      }
    }

    // Email to customer with download link
    const customerMailOptions = {
      from: '"AutoHub Books" <info@autohub.africa>',
      to: email,
      subject: `Your Download is Ready: ${product.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(to right, #065f46, #047857); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">AutoHub Books</h1>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #065f46;">Thank you for your purchase!</h2>
            
            <p>Dear ${customerName},</p>
            
            <p>Your payment has been confirmed and your download is ready!</p>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #065f46;">
              <h3 style="color: #065f46; margin-top: 0;">Order Details:</h3>
              <p><strong>Product:</strong> ${product.name}</p>
              <p><strong>Reference:</strong> ${reference}</p>
              <p><strong>Amount:</strong> ${product.priceDisplay}</p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${downloadUrl}" 
                 style="display: inline-block; background-color: #10B981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
                Download Your ${product.type === 'ebook' ? 'Book' : 'Magazine'}
              </a>
            </div>
            
            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #92400e;">
                <strong>Important:</strong> This download link will expire in 24 hours and can only be used 3 times. 
                Please save your file after downloading.
              </p>
            </div>
            
            <p>If you have any issues with your download, please contact us at 
              <a href="mailto:info@autohub.africa" style="color: #065f46;">info@autohub.africa</a>
            </p>
            
            <p>Thank you for choosing AutoHub Books!</p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} AutoHub Books. All rights reserved.<br>
              <a href="https://autohub.africa" style="color: #065f46; text-decoration: none;">www.autohub.africa</a>
            </p>
          </div>
        </div>
      `
    }

    // Admin notification
    const adminMailOptions = {
      from: '"AutoHub Books" <info@autohub.africa>',
      to: 'info@autohub.africa',
      cc: 'chikajoel@autohub.africa',
      subject: `New Digital Purchase: ${product.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #065f46;">New Digital Product Sale!</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Customer:</strong> ${customerName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Product:</strong> ${product.name}</p>
            <p><strong>Amount:</strong> ${product.priceDisplay}</p>
            <p><strong>Reference:</strong> ${reference}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    }

    // Send both emails
    await transporter.sendMail(customerMailOptions)
    await transporter.sendMail(adminMailOptions)

    return {
      statusCode: 200,
      body: { 
        success: true,
        message: 'Download link sent successfully' 
      }
    }
  } catch (error) {
    console.error('Email sending error:', error)
    
    return {
      statusCode: 500,
      body: { 
        success: false,
        error: 'Failed to send download email',
        details: error.message 
      }
    }
  }
})
