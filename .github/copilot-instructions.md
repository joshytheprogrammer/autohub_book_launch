# AutoHub Book Launch Platform - AI Developer Guide

## Project Overview
AutoHub Book Launch is a Nuxt-based web platform for showcasing and selling automotive industry books. The primary focus is on the "Modern Automotive CEO" book by Chika Joel, with a dedicated landing page and payment integration via Paystack.

## Architecture

### Core Components
- **Nuxt 4.x**: Vue-based framework for server-side rendering
- **TailwindCSS**: For styling components
- **Paystack**: Payment gateway integration for handling book pre-orders
- **Docker**: Containerization for deployment

### Project Structure
- `/app/app.vue`: Main app entry point
- `/app/layouts/default.vue`: Primary layout template
- `/app/pages/`: Route pages including `index.vue` (book list) and `maceo.vue` (featured book)
- `/app/components/`: Reusable Vue components
  - `/app/components/BookCard.vue`: Card component for displaying book info
  - `/app/components/Maceo/`: Components specific to the featured "Modern Automotive CEO" book
- `/app/composables/usePayment.js`: Payment handling logic
- `/app/plugins/paystack.client.js`: Paystack integration

## Key Patterns & Workflows

### Component Organization
- Generic components live in `/app/components/`
- Book-specific components are grouped in `/app/components/Maceo/`
- Components follow a consistent prop/emit pattern for data flow

### Payment Flow
1. User clicks "Pre-order" button → Opens payment modal via `openPaymentModal()`
2. Form collects customer information → Submits to Paystack via `processPayment()`
3. On success, displays success modal via `handlePaymentSuccess()`
4. Errors are shown via toast notifications using `errorMessage`

```javascript
// Example of triggering payment flow
const { openPaymentModal } = usePayment()
// Then in template: <button @click="openPaymentModal">Pre-order</button>
```

### Environment Variables
- `NUXT_PUBLIC_PAYSTACK_PUBLIC_KEY`: Paystack API key for processing payments
  - Default test key is provided but should be overridden in production

## Development Workflow

### Setup & Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production
```bash
# Build the application
npm run build

# Preview production build
npm run preview

# Start production server
npm run start
```

### Docker Deployment
The project is configured for deployment using Docker:
```bash
# Build Docker image
docker build -t autohub-book-launch .

# Run container
docker run -p 3000:3000 autohub-book-launch
```

## Conventions & Patterns

### Component Props & Events
- Components accept configuration via props
- User actions are emitted via events (e.g., `@preorder`, `@payment-success`)
- Example: `<MaceoHeroSection @preorder="openPaymentModal" />`

### State Management
- Local component state uses Vue's `ref` and `computed`
- Shared state is managed via composables (e.g., `usePayment`)
- No Vuex/Pinia store is currently implemented