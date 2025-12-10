import { createHash, randomBytes } from 'crypto'

// In-memory token store (in production, use Redis or database)
const tokenStore = new Map()

// Token configuration
const TOKEN_EXPIRY_HOURS = 24
const MAX_DOWNLOADS = 3

/**
 * Generate a secure download token
 * @param {string} productId - The product being purchased
 * @param {string} email - Customer email
 * @param {string} paymentReference - Paystack payment reference
 * @returns {Object} Token data with token string and expiry
 */
export function generateDownloadToken(productId, email, paymentReference) {
  // Create unique token
  const randomPart = randomBytes(32).toString('hex')
  const timestamp = Date.now()
  const dataToHash = `${productId}:${email}:${paymentReference}:${timestamp}:${randomPart}`
  
  const token = createHash('sha256').update(dataToHash).digest('hex')
  
  // Calculate expiry
  const expiresAt = new Date(timestamp + (TOKEN_EXPIRY_HOURS * 60 * 60 * 1000))
  
  // Store token data
  const tokenData = {
    token,
    productId,
    email,
    paymentReference,
    createdAt: new Date(timestamp),
    expiresAt,
    downloadCount: 0,
    maxDownloads: MAX_DOWNLOADS,
    isValid: true
  }
  
  tokenStore.set(token, tokenData)
  
  return {
    token,
    expiresAt,
    maxDownloads: MAX_DOWNLOADS
  }
}

/**
 * Validate and consume a download token
 * @param {string} token - The download token to validate
 * @returns {Object} Validation result with product info or error
 */
export function validateDownloadToken(token) {
  const tokenData = tokenStore.get(token)
  
  if (!tokenData) {
    return {
      valid: false,
      error: 'Invalid or expired download link'
    }
  }
  
  // Check if token is still valid
  if (!tokenData.isValid) {
    return {
      valid: false,
      error: 'This download link has been revoked'
    }
  }
  
  // Check expiry
  if (new Date() > new Date(tokenData.expiresAt)) {
    tokenData.isValid = false
    return {
      valid: false,
      error: 'This download link has expired'
    }
  }
  
  // Check download count
  if (tokenData.downloadCount >= tokenData.maxDownloads) {
    tokenData.isValid = false
    return {
      valid: false,
      error: 'Maximum download limit reached'
    }
  }
  
  // Increment download count
  tokenData.downloadCount++
  
  // If max downloads reached, invalidate token
  if (tokenData.downloadCount >= tokenData.maxDownloads) {
    tokenData.isValid = false
  }
  
  return {
    valid: true,
    productId: tokenData.productId,
    email: tokenData.email,
    remainingDownloads: tokenData.maxDownloads - tokenData.downloadCount
  }
}

/**
 * Get token info without consuming it
 * @param {string} token - The download token
 * @returns {Object} Token information
 */
export function getTokenInfo(token) {
  const tokenData = tokenStore.get(token)
  
  if (!tokenData) {
    return null
  }
  
  return {
    productId: tokenData.productId,
    email: tokenData.email,
    expiresAt: tokenData.expiresAt,
    downloadCount: tokenData.downloadCount,
    maxDownloads: tokenData.maxDownloads,
    isValid: tokenData.isValid && new Date() <= new Date(tokenData.expiresAt)
  }
}

/**
 * Revoke a download token
 * @param {string} token - The token to revoke
 */
export function revokeToken(token) {
  const tokenData = tokenStore.get(token)
  if (tokenData) {
    tokenData.isValid = false
  }
}

/**
 * Clean up expired tokens (call periodically)
 */
export function cleanupExpiredTokens() {
  const now = new Date()
  for (const [token, data] of tokenStore.entries()) {
    if (now > new Date(data.expiresAt)) {
      tokenStore.delete(token)
    }
  }
}

// Export token store for testing purposes
export { tokenStore }
