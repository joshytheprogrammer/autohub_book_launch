# Storage Directory

This directory is used to store downloadable files that customers can purchase.

## Directory Structure

```
storage/
  downloads/
    maceo.pdf              # Modern Automotive CEO PDF
    autohub-magazine.pdf   # AutoHub Magazine PDF
```

## Security Notes

1. **Do NOT place this directory in the `public` folder** - Files here should only be accessible through the secure download API.

2. **Server Configuration** - Ensure your production server is configured to:
   - Deny direct access to this directory
   - Only serve files through the `/api/download` endpoint

3. **File Upload** - Upload your actual PDF files to this directory:
   - `storage/downloads/maceo.pdf` - The Modern Automotive CEO book
   - `storage/downloads/autohub-magazine.pdf` - The AutoHub Magazine

## Token Security

The download system uses secure tokens with:
- 24-hour expiration
- Maximum 3 downloads per token
- SHA-256 hashed tokens
- Server-side validation

## Adding New Products

1. Add the PDF file to `storage/downloads/`
2. Update `server/utils/products.js` with the product details
3. Update the products array in `app/pages/storefront.vue`
