import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.subject || !body.message) {
      return {
        statusCode: 400,
        body: { error: 'Missing required fields' }
      }
    }

    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: 'iredmail.autohub.africa',
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: 'info@autohub.africa',
        pass: 'ZD2Gg(k4Jw'
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Verify connection
    await transporter.verify()

    // Email to admin
    const adminMailOptions = {
      from: '"AutoHub Books Contact Form" <info@autohub.africa>',
      to: 'info@autohub.africa',
      cc: 'chikajoel@autohub.africa',
      replyTo: body.email,
      subject: `New Contact Form Submission: ${body.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #065f46;">New Contact Form Submission</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${body.firstName} ${body.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
            <p><strong>Subject:</strong> ${body.subject}</p>
            <p><strong>Newsletter Subscription:</strong> ${body.newsletter ? 'Yes' : 'No'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Message:</h3>
            <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #065f46; border-radius: 4px;">
              ${body.message.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the AutoHub Books contact form at ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    }

    // Confirmation email to user
    const userMailOptions = {
      from: '"AutoHub Books" <info@autohub.africa>',
      to: body.email,
      subject: 'Thank you for contacting AutoHub Books',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(to right, #065f46, #047857); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">AutoHub Books</h1>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #065f46;">Thank you for reaching out!</h2>
            
            <p>Dear ${body.firstName},</p>
            
            <p>We've received your message and appreciate you taking the time to contact us. Our team will review your inquiry and get back to you within 24 hours.</p>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #065f46;">
              <h3 style="color: #065f46; margin-top: 0;">Your Message Summary:</h3>
              <p><strong>Subject:</strong> ${body.subject}</p>
              <p><strong>Message:</strong></p>
              <p style="color: #374151;">${body.message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <p>If you have any urgent questions, you can also reach us at:</p>
            <ul style="color: #374151;">
              <li>Email: <a href="mailto:info@autohub.africa" style="color: #065f46;">info@autohub.africa</a></li>
              <li>Author Collaborations: <a href="mailto:chikajoel@autohub.africa" style="color: #065f46;">chikajoel@autohub.africa</a></li>
            </ul>
            
            <div style="margin-top: 30px; text-align: center;">
              <p style="color: #6b7280;">Follow us on social media:</p>
              <div style="margin: 15px 0;">
                <a href="https://www.instagram.com/lovej_ib" style="margin: 0 10px; color: #065f46; text-decoration: none;">Instagram</a>
                <a href="https://www.facebook.com/J-ib" style="margin: 0 10px; color: #065f46; text-decoration: none;">Facebook</a>
                <a href="https://twitter.com/lovej_ib" style="margin: 0 10px; color: #065f46; text-decoration: none;">Twitter</a>
                <a href="https://www.linkedin.com/in/J-ib" style="margin: 0 10px; color: #065f46; text-decoration: none;">LinkedIn</a>
              </div>
            </div>
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

    // Send both emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return {
      statusCode: 200,
      body: { 
        success: true,
        message: 'Email sent successfully' 
      }
    }
  } catch (error) {
    console.error('Email sending error:', error)
    
    return {
      statusCode: 500,
      body: { 
        error: 'Failed to send email',
        details: error.message 
      }
    }
  }
})
