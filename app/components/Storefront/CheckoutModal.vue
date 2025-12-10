<template>
  <Teleport to="body">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="checkout-modal-title"
    >
      <!-- Backdrop -->
      <div 
        class="absolute inset-0 bg-black/60 backdrop-blur-sm"
        @click="handleClose"
      ></div>
      
      <!-- Modal -->
      <div class="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto transform transition-all">
        <!-- Header -->
        <div class="sticky top-0 bg-gradient-to-r from-green-dark to-emerald-accent text-white p-5 rounded-t-2xl z-10">
          <div class="flex items-center justify-between">
            <h2 id="checkout-modal-title" class="text-xl font-semibold">Complete Your Purchase</h2>
            <button 
              @click="handleClose"
              :disabled="isProcessing"
              class="text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 disabled:opacity-50"
              aria-label="Close modal"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Content -->
        <div class="p-6">
          <!-- Product Summary -->
          <div v-if="product" class="flex gap-4 p-4 bg-gray-50 rounded-xl mb-6">
            <img 
              :src="product.coverImage" 
              :alt="product.name" 
              class="w-20 h-24 object-cover rounded-lg shadow-md"
            >
            <div class="flex-1">
              <h3 class="font-semibold text-gray-900">{{ product.name }}</h3>
              <p class="text-sm text-gray-500 mt-1">by {{ product.author }}</p>
              <p class="text-lg font-bold text-green-dark mt-2">{{ product.priceDisplay }}</p>
            </div>
          </div>

          <!-- Digital Download Info -->
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p class="text-sm text-blue-800 font-medium">Digital Download</p>
                <p class="text-xs text-blue-600 mt-1">
                  After payment, you'll receive an email with a secure download link. 
                  The link expires in 24 hours and can be used up to 3 times.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Payment Form -->
          <form @submit.prevent="processPayment" class="space-y-4">
            <div>
              <label for="checkout-email" class="form-label">
                Email Address <span class="text-red-500">*</span>
              </label>
              <input
                id="checkout-email"
                v-model="customerEmail"
                type="email"
                required
                placeholder="you@example.com"
                class="form-input"
                :disabled="isProcessing"
                autocomplete="email"
              >
              <p class="text-xs text-gray-500 mt-1">Download link will be sent to this email</p>
            </div>
            
            <div>
              <label for="checkout-name" class="form-label">
                Full Name <span class="text-red-500">*</span>
              </label>
              <input
                id="checkout-name"
                v-model="customerName"
                type="text"
                required
                placeholder="Enter your full name"
                class="form-input"
                :disabled="isProcessing"
                autocomplete="name"
              >
            </div>
            
            <!-- Order Summary -->
            <div class="bg-green-light rounded-xl p-4 space-y-2">
              <div class="flex justify-between text-gray-700">
                <span>Product:</span>
                <span class="font-medium">{{ product?.name }}</span>
              </div>
              <div class="flex justify-between text-gray-700">
                <span>Format:</span>
                <span class="font-medium">PDF Digital Download</span>
              </div>
              <div class="border-t border-green-200 my-2"></div>
              <div class="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span class="text-green-dark">{{ product?.priceDisplay }}</span>
              </div>
            </div>
            
            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isProcessing || !customerEmail || !customerName"
              class="w-full btn btn-primary py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isProcessing" class="flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                Pay Securely with Paystack
              </span>
              <span v-else class="flex items-center justify-center gap-2">
                <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            </button>
          </form>
          
          <!-- Security Footer -->
          <div class="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <span>256-bit SSL encrypted payment powered by Paystack</span>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  product: Object,
  paystackKey: String
})

const emit = defineEmits(['close', 'payment-success', 'payment-error'])

const customerEmail = ref('')
const customerName = ref('')
const isProcessing = ref(false)

// Clear form when modal opens
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    customerEmail.value = ''
    customerName.value = ''
    isProcessing.value = false
  }
})

function handleClose() {
  if (!isProcessing.value) {
    emit('close')
  }
}

async function processPayment() {
  if (!customerEmail.value || !customerName.value || !props.product) return
  
  isProcessing.value = true
  
  // Check if Paystack is loaded
  if (typeof window === 'undefined' || !window.PaystackPop) {
    emit('payment-error', 'Payment system not available. Please refresh and try again.')
    isProcessing.value = false
    return
  }
  
  // Amount in kobo
  const amount = props.product.price * 100
  
  const handler = window.PaystackPop.setup({
    key: props.paystackKey,
    email: customerEmail.value,
    amount: amount,
    currency: props.product.currency || 'NGN',
    ref: `STORE_${props.product.id}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    metadata: {
      custom_fields: [
        {
          display_name: "Product",
          variable_name: "product_id",
          value: props.product.id
        },
        {
          display_name: "Product Name",
          variable_name: "product_name",
          value: props.product.name
        },
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: customerName.value
        },
        {
          display_name: "Type",
          variable_name: "purchase_type",
          value: "digital_download"
        }
      ]
    },
    callback: function(response) {
      emit('payment-success', {
        reference: response.reference,
        email: customerEmail.value,
        name: customerName.value,
        amount: amount,
        productId: props.product.id,
        productName: props.product.name
      })
      isProcessing.value = false
    },
    onClose: function() {
      isProcessing.value = false
    }
  })
  
  handler.openIframe()
}
</script>
