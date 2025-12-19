import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate required fields
    const { 
      productId, 
      productName, 
      productPrice,
      customerName, 
      customerEmail, 
      customerPhone, 
      deliveryAddress, 
      deliveryState 
    } = body
    
    if (!productId || !productName || !customerName || !customerEmail || !customerPhone || !deliveryAddress || !deliveryState) {
      return {
        statusCode: 400,
        body: { 
          success: false,
          error: 'Missing required fields' 
        }
      }
    }

    // Generate order reference
    const orderReference = `ORD_${Date.now()}_${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Small delay to ensure stable connection
    await new Promise(resolve => setTimeout(resolve, 500))

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

    // Email to customer - Order Confirmation
    const customerMailOptions = {
      from: '"AutoHub Books" <info@autohub.africa>',
      to: customerEmail,
      subject: `Order Confirmed: ${productName} - ${orderReference}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(to right, #065f46, #047857); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">AutoHub Books</h1>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #065f46;">Order Confirmed! 🎉</h2>
            
            <p>Dear ${customerName},</p>
            
            <p>Thank you for your order! We're excited to get your book to you.</p>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #065f46;">
              <h3 style="color: #065f46; margin-top: 0;">Order Details:</h3>
              <p><strong>Order Reference:</strong> ${orderReference}</p>
              <p><strong>Product:</strong> ${productName}</p>
              <p><strong>Amount:</strong> ${productPrice}</p>
              <p><strong>Payment Method:</strong> Pay on Delivery</p>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Delivery Information:</h3>
              <p><strong>Name:</strong> ${customerName}</p>
              <p><strong>Phone:</strong> ${customerPhone}</p>
              <p><strong>Address:</strong> ${deliveryAddress}</p>
              <p><strong>State:</strong> ${deliveryState}</p>
            </div>
            
            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #92400e;">
                <strong>What happens next?</strong><br>
                • We'll process your order within 1-2 business days<br>
                • Our delivery partner will contact you before delivery<br>
                • Expected delivery: 3-7 business days<br>
                • Pay <strong>${productPrice}</strong> when you receive your book
              </p>
            </div>
            
            <p>If you have any questions about your order, please contact us at 
              <a href="mailto:info@autohub.africa" style="color: #065f46;">info@autohub.africa</a>
              or reply to this email with your order reference.
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

    // Admin notification - New Order
    const adminMailOptions = {
      from: '"AutoHub Books" <info@autohub.africa>',
      to: 'info@autohub.africa',
      cc: 'chikajoel@autohub.africa',
      subject: `🆕 New Physical Order: ${productName} - ${orderReference}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #065f46;">New Physical Book Order!</h2>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #065f46;">
            <h3 style="margin-top: 0;">Order Information:</h3>
            <p><strong>Order Reference:</strong> ${orderReference}</p>
            <p><strong>Product:</strong> ${productName}</p>
            <p><strong>Amount:</strong> ${productPrice}</p>
            <p><strong>Payment:</strong> Pay on Delivery</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Customer Details:</h3>
            <p><strong>Name:</strong> ${customerName}</p>
            <p><strong>Email:</strong> <a href="mailto:${customerEmail}">${customerEmail}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${customerPhone}">${customerPhone}</a></p>
          </div>
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
            <h3 style="margin-top: 0; color: #92400e;">Delivery Address:</h3>
            <p style="margin: 0; color: #92400e;">
              ${deliveryAddress}<br>
              <strong>${deliveryState} State</strong>
            </p>
          </div>
          
          <p style="color: #ef4444; font-weight: bold;">⚠️ Action Required: Process this order and arrange delivery.</p>
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
        message: 'Order placed successfully',
        orderReference
      }
    }
  } catch (error) {
    console.error('Order placement error:', error)
    
    return {
      statusCode: 500,
      body: { 
        success: false,
        error: 'Failed to place order',
        details: error.message 
      }
    }
  }
})
