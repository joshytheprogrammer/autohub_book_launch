<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <StorefrontHeroSection />
    
    <!-- How It Works -->
    <StorefrontHowItWorks />
    
    <!-- Products Section -->
    <section class="py-16 lg:py-20">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Available Downloads
          </h2>
          <div class="h-1 w-20 bg-green-primary mx-auto mb-4 rounded-full"></div>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Premium automotive industry publications at your fingertips. 
            Purchase once for lifetime access to your digital copy.
          </p>
        </div>
        
        <!-- Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <StorefrontProductCard 
            v-for="product in products" 
            :key="product.id"
            :product="product"
            @purchase="handlePurchase"
          />
        </div>
        
        <!-- Empty State -->
        <div v-if="products.length === 0" class="text-center py-12">
          <div class="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-sm border border-gray-200">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
            <h3 class="text-xl font-semibold text-gray-700 mb-2">No products available</h3>
            <p class="text-gray-600">Check back soon for new digital downloads.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="py-16 bg-white border-t border-gray-200">
      <div class="container mx-auto px-6 max-w-4xl">
        <div class="text-center mb-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
        </div>
        
        <div class="space-y-4">
          <!-- Digital Downloads -->
          <details class="group bg-gray-50 rounded-xl p-4">
            <summary class="flex justify-between items-center cursor-pointer list-none font-medium text-gray-900">
              How do I download my digital purchase?
              <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <p class="mt-3 text-gray-600 text-sm">
              After successful payment, you'll receive an email with a secure download link. Simply click the link to download your PDF file. The link is valid for 24 hours and can be used up to 3 times.
            </p>
          </details>
          
          <details class="group bg-gray-50 rounded-xl p-4">
            <summary class="flex justify-between items-center cursor-pointer list-none font-medium text-gray-900">
              What payment methods do you accept for digital products?
              <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <p class="mt-3 text-gray-600 text-sm">
              We accept all major debit/credit cards, bank transfers, and USSD payments through Paystack. All payments are processed securely with 256-bit SSL encryption.
            </p>
          </details>
          
          <!-- Physical Orders -->
          <details class="group bg-amber-50 rounded-xl p-4">
            <summary class="flex justify-between items-center cursor-pointer list-none font-medium text-gray-900">
              How does Pay on Delivery work for physical books?
              <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <p class="mt-3 text-gray-600 text-sm">
              When you order a physical book, you don't pay anything upfront. Simply fill in your delivery details, and we'll ship the book to you. You pay the delivery person in cash when you receive your book.
            </p>
          </details>
          
          <details class="group bg-amber-50 rounded-xl p-4">
            <summary class="flex justify-between items-center cursor-pointer list-none font-medium text-gray-900">
              How long does delivery take for physical books?
              <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <p class="mt-3 text-gray-600 text-sm">
              Delivery typically takes 3-7 business days within Nigeria. We'll process your order within 1-2 business days, and our delivery partner will contact you before delivery to coordinate a convenient time.
            </p>
          </details>
          
          <details class="group bg-gray-50 rounded-xl p-4">
            <summary class="flex justify-between items-center cursor-pointer list-none font-medium text-gray-900">
              What if my download link expires?
              <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <p class="mt-3 text-gray-600 text-sm">
              If your download link has expired or you've reached the download limit, please contact us at info@autohub.africa with your payment reference number. We'll be happy to help you access your purchase.
            </p>
          </details>
          
          <details class="group bg-gray-50 rounded-xl p-4">
            <summary class="flex justify-between items-center cursor-pointer list-none font-medium text-gray-900">
              Can I get a refund?
              <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <p class="mt-3 text-gray-600 text-sm">
              For digital products, we generally don't offer refunds once the download link has been sent. For physical orders, you can cancel before shipment. Contact us if you have any issues and we'll work to resolve them.
            </p>
          </details>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-12 bg-gradient-to-r from-green-dark to-emerald-accent text-white">
      <div class="container mx-auto px-6 max-w-4xl text-center">
        <h2 class="text-2xl lg:text-3xl font-bold mb-4">Need Help?</h2>
        <p class="text-green-light mb-6 max-w-xl mx-auto">
          If you have any questions or issues with your purchase, our support team is here to help.
        </p>
        <NuxtLink 
          to="/contact" 
          class="inline-flex items-center gap-2 bg-white text-green-dark px-6 py-3 rounded-xl font-semibold hover:bg-green-light transition-colors"
        >
          Contact Support
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </NuxtLink>
      </div>
    </section>
    
    <!-- Checkout Modal (Digital Products) -->
    <StorefrontCheckoutModal
      :is-open="isCheckoutOpen"
      :product="selectedProduct"
      :paystack-key="paystackConfig.publicKey"
      @close="closeCheckout"
      @payment-success="handlePaymentSuccess"
      @payment-error="handlePaymentError"
    />
    
    <!-- Physical Order Modal -->
    <StorefrontPhysicalOrderModal
      :is-open="isPhysicalOrderOpen"
      :product="selectedPhysicalProduct"
      @close="closePhysicalOrder"
      @order-success="handleOrderSuccess"
      @order-error="handleOrderError"
    />
    
    <!-- Success Modal (Digital) -->
    <StorefrontPurchaseSuccess
      :is-visible="isSuccessModalOpen"
      :payment-data="paymentData"
      :download-url="downloadUrl"
      @close="closeSuccessModal"
    />
    
    <!-- Success Modal (Physical) -->
    <StorefrontOrderSuccess
      :is-visible="isOrderSuccessOpen"
      :order-data="orderData"
      @close="closeOrderSuccess"
    />
    
    <!-- Notification Toast -->
    <StorefrontNotificationToast
      :show="notification.show"
      :type="notification.type"
      :title="notification.title"
      :message="notification.message"
      @close="hideNotification"
    />
    
    <!-- Loading Overlay -->
    <Teleport to="body">
      <div 
        v-if="isProcessingPayment" 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      >
        <div class="bg-white rounded-2xl p-8 text-center shadow-2xl">
          <svg class="animate-spin w-12 h-12 text-green-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p class="text-gray-900 font-medium">Processing your purchase...</p>
          <p class="text-sm text-gray-500 mt-1">Please wait while we generate your download link.</p>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStorefrontPayment } from '~/composables/useStorefrontPayment'

// SEO
useHead({
  title: 'Digital Storefront - AutoHub Books',
  meta: [
    { name: 'description', content: 'Purchase and download premium automotive industry publications instantly. Secure payments, instant delivery.' },
    { name: 'keywords', content: 'digital downloads, ebooks, automotive books, PDF download, instant download' },
    { property: 'og:title', content: 'Digital Storefront - AutoHub Books' },
    { property: 'og:description', content: 'Purchase and download premium automotive industry publications instantly.' }
  ]
})

// Paystack configuration
const runtimeConfig = useRuntimeConfig()
const paystackConfig = {
  publicKey: runtimeConfig.public.paystackPublicKey
}

// Payment system (for digital products)
const {
  isCheckoutOpen,
  isSuccessModalOpen,
  selectedProduct,
  paymentData,
  downloadUrl,
  isProcessingPayment,
  notification,
  openCheckout,
  closeCheckout,
  handlePaymentSuccess,
  handlePaymentError,
  closeSuccessModal,
  hideNotification,
  showNotification
} = useStorefrontPayment()

// Physical order state
const isPhysicalOrderOpen = ref(false)
const isOrderSuccessOpen = ref(false)
const selectedPhysicalProduct = ref(null)
const orderData = ref({})

// Handle purchase based on product type
function handlePurchase(product) {
  if (product.isPhysical) {
    selectedPhysicalProduct.value = product
    isPhysicalOrderOpen.value = true
  } else {
    openCheckout(product)
  }
}

function closePhysicalOrder() {
  isPhysicalOrderOpen.value = false
  selectedPhysicalProduct.value = null
}

function handleOrderSuccess(data) {
  orderData.value = data
  isPhysicalOrderOpen.value = false
  isOrderSuccessOpen.value = true
}

function handleOrderError(error) {
  showNotification('error', error, 'Order Failed')
}

function closeOrderSuccess() {
  isOrderSuccessOpen.value = false
  orderData.value = {}
}

// Products data - Digital and Physical
const products = ref([
  // Digital Products
  {
    id: 'maceo-digital',
    name: 'Modern Automotive CEO (Digital)',
    description: 'The definitive guide to leadership in the evolving automotive industry. From Land Vehicles to Maritime, Aviation, Space Exploration, and AI integration.',
    price: 50000,
    priceDisplay: '₦50,000',
    currency: 'NGN',
    type: 'ebook',
    isPhysical: false,
    fileName: 'Modern_Automotive_CEO.pdf',
    coverImage: '/bookcovers/1758548610.png',
    author: 'Chika Joel (J-ib)',
    features: [
      'Instant digital download',
      'PDF format',
      'Lifetime access',
      'Download up to 3 times'
    ]
  },
  // Physical Products
  {
    id: 'maceo-physical',
    name: 'Modern Automotive CEO (Hard Copy)',
    description: 'The definitive guide to leadership in the evolving automotive industry. Premium printed hardcover edition delivered to your doorstep.',
    price: 50000,
    priceDisplay: '₦50,000',
    currency: 'NGN',
    type: 'book',
    isPhysical: true,
    coverImage: '/bookcovers/1758548610.png',
    author: 'Chika Joel (J-ib)',
    features: [
      'Premium hardcover print',
      'Pay on delivery',
      'Free delivery nationwide',
      '3-7 business days delivery'
    ]
  }
])
</script>
