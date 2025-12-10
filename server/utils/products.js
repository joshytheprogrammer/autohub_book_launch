// Digital products catalog
export const digitalProducts = {
  'maceo-digital': {
    id: 'maceo-digital',
    name: 'Modern Automotive CEO (Digital)',
    description: 'The definitive guide to leadership in the evolving automotive industry. Digital PDF download.',
    price: 10000, // Price in Naira
    priceDisplay: '₦10,000',
    currency: 'NGN',
    type: 'ebook',
    fileName: 'Modern_Automotive_CEO.pdf',
    filePath: 'downloads/maceo.pdf', // Relative to server storage
    coverImage: '/bookcovers/1758548610.png',
    author: 'Chika Joel (J-ib)',
    features: [
      'Instant digital download',
      'PDF format',
      'Lifetime access',
      'Download up to 3 times'
    ]
  },
  'autohub-magazine-digital': {
    id: 'autohub-magazine-digital',
    name: 'AutoHub Magazine (Digital)',
    description: 'The premier automotive industry magazine featuring latest trends, innovations, and insights.',
    price: 10000, // Price in Naira
    priceDisplay: '₦10,000',
    currency: 'NGN',
    type: 'magazine',
    fileName: 'AutoHub_Magazine.pdf',
    filePath: 'downloads/autohub-magazine.pdf',
    coverImage: '/bookcovers/mock-00054.png',
    author: 'AutoHub Editorial Team',
    features: [
      'Instant digital download',
      'PDF format',
      'Lifetime access',
      'Download up to 3 times'
    ]
  }
}

/**
 * Get product by ID
 * @param {string} productId 
 * @returns {Object|null} Product data or null
 */
export function getProduct(productId) {
  return digitalProducts[productId] || null
}

/**
 * Get all products
 * @returns {Array} Array of all products
 */
export function getAllProducts() {
  return Object.values(digitalProducts)
}

/**
 * Validate product exists
 * @param {string} productId 
 * @returns {boolean}
 */
export function productExists(productId) {
  return productId in digitalProducts
}
