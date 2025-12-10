import { validateDownloadToken, getTokenInfo } from '../utils/downloadTokens'
import { getProduct } from '../utils/products'
import { createReadStream, existsSync, statSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const { token } = query
    
    if (!token) {
      // Return HTML error page
      setResponseHeader(event, 'Content-Type', 'text/html')
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Download Error - AutoHub Books</title>
          <style>
            body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #f3f4f6; }
            .error-box { background: white; padding: 40px; border-radius: 16px; text-align: center; max-width: 400px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .error-icon { width: 64px; height: 64px; background: #fef2f2; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
            .error-icon svg { width: 32px; height: 32px; color: #ef4444; }
            h1 { color: #111827; font-size: 24px; margin-bottom: 10px; }
            p { color: #6b7280; margin-bottom: 20px; }
            a { display: inline-block; background: #10B981; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="error-box">
            <div class="error-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <h1>Download Link Invalid</h1>
            <p>No download token provided. Please use the link sent to your email.</p>
            <a href="/storefront">Return to Store</a>
          </div>
        </body>
        </html>
      `
    }

    // Validate token
    const validation = validateDownloadToken(token)
    
    if (!validation.valid) {
      // Return HTML error page
      setResponseHeader(event, 'Content-Type', 'text/html')
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Download Error - AutoHub Books</title>
          <style>
            body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #f3f4f6; }
            .error-box { background: white; padding: 40px; border-radius: 16px; text-align: center; max-width: 400px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .error-icon { width: 64px; height: 64px; background: #fef2f2; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
            .error-icon svg { width: 32px; height: 32px; color: #ef4444; }
            h1 { color: #111827; font-size: 24px; margin-bottom: 10px; }
            p { color: #6b7280; margin-bottom: 20px; }
            a { display: inline-block; background: #10B981; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="error-box">
            <div class="error-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <h1>Download Link Invalid</h1>
            <p>${validation.error}</p>
            <a href="/storefront">Return to Store</a>
          </div>
        </body>
        </html>
      `
    }

    // Get product info
    const product = getProduct(validation.productId)
    if (!product) {
      setResponseHeader(event, 'Content-Type', 'text/html')
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Product Not Found - AutoHub Books</title>
          <style>
            body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #f3f4f6; }
            .error-box { background: white; padding: 40px; border-radius: 16px; text-align: center; max-width: 400px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            h1 { color: #111827; font-size: 24px; margin-bottom: 10px; }
            p { color: #6b7280; margin-bottom: 20px; }
            a { display: inline-block; background: #10B981; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="error-box">
            <h1>Product Not Found</h1>
            <p>The requested product could not be found.</p>
            <a href="/storefront">Return to Store</a>
          </div>
        </body>
        </html>
      `
    }

    // Check if file exists
    // In production, files should be stored securely outside public folder
    const storagePath = join(process.cwd(), 'storage', product.filePath)
    
    // For demo purposes, if file doesn't exist, return a placeholder response
    if (!existsSync(storagePath)) {
      // Return success page with demo message
      setResponseHeader(event, 'Content-Type', 'text/html')
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Download Ready - AutoHub Books</title>
          <style>
            body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #f3f4f6; }
            .success-box { background: white; padding: 40px; border-radius: 16px; text-align: center; max-width: 500px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .success-icon { width: 64px; height: 64px; background: #d1fae5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
            .success-icon svg { width: 32px; height: 32px; color: #10b981; }
            h1 { color: #111827; font-size: 24px; margin-bottom: 10px; }
            p { color: #6b7280; margin-bottom: 20px; }
            .info-box { background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b; text-align: left; }
            .info-box p { margin: 0; color: #92400e; font-size: 14px; }
            a { display: inline-block; background: #10B981; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; }
            .remaining { background: #e0f2fe; color: #0369a1; padding: 8px 16px; border-radius: 20px; font-size: 14px; display: inline-block; margin-top: 15px; }
          </style>
        </head>
        <body>
          <div class="success-box">
            <div class="success-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h1>Download Verified!</h1>
            <p>Your purchase of <strong>${product.name}</strong> has been verified.</p>
            
            <div class="info-box">
              <p><strong>Demo Mode:</strong> The actual PDF file hasn't been uploaded yet. In production, your download would start automatically. Please contact info@autohub.africa for your file.</p>
            </div>
            
            <div class="remaining">
              ${validation.remainingDownloads} download${validation.remainingDownloads !== 1 ? 's' : ''} remaining
            </div>
            
            <br><br>
            <a href="/storefront">Return to Store</a>
          </div>
        </body>
        </html>
      `
    }

    // Get file stats
    const fileStats = statSync(storagePath)
    
    // Set headers for file download
    setResponseHeader(event, 'Content-Type', 'application/pdf')
    setResponseHeader(event, 'Content-Disposition', `attachment; filename="${product.fileName}"`)
    setResponseHeader(event, 'Content-Length', fileStats.size)
    setResponseHeader(event, 'Cache-Control', 'no-store, no-cache, must-revalidate')
    setResponseHeader(event, 'X-Downloads-Remaining', validation.remainingDownloads)
    
    // Stream the file
    return sendStream(event, createReadStream(storagePath))
    
  } catch (error) {
    console.error('Download error:', error)
    
    setResponseHeader(event, 'Content-Type', 'text/html')
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Download Error - AutoHub Books</title>
        <style>
          body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #f3f4f6; }
          .error-box { background: white; padding: 40px; border-radius: 16px; text-align: center; max-width: 400px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          h1 { color: #111827; font-size: 24px; margin-bottom: 10px; }
          p { color: #6b7280; margin-bottom: 20px; }
          a { display: inline-block; background: #10B981; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="error-box">
          <h1>Download Error</h1>
          <p>An error occurred while processing your download. Please try again or contact support.</p>
          <a href="/storefront">Return to Store</a>
        </div>
      </body>
      </html>
    `
  }
})
