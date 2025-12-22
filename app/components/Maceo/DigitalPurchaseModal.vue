<template>
  <Teleport to="body">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="digital-modal-title"
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
            <h2 id="digital-modal-title" class="text-xl font-semibold">Buy Digital Copy</h2>
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
          <!-- Book Summary -->
          <div class="flex gap-4 p-4 bg-gray-50 rounded-xl mb-6">
            <img 
              :src="bookCover" 
              :alt="bookTitle" 
              class="w-20 h-24 object-cover rounded-lg shadow-md"
            >
            <div class="flex-1">
              <h3 class="font-semibold text-gray-900">{{ bookTitle }}</h3>
              <p class="text-sm text-gray-500 mt-1">by {{ author }}</p>
              <div class="flex items-center gap-2 mt-2">
                <span class="text-lg font-bold text-green-dark">{{ price }}</span>
                <span class="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Digital</span>
              </div>
            </div>
          </div>

          <!-- Digital Download Info -->
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              <div>
                <p class="text-sm text-blue-800 font-medium">Instant Digital Download</p>
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
              <label for="digital-name" class="form-label">
                Full Name <span class="text-red-500">*</span>
              </label>
              <input
                id="digital-name"
                v-model="formData.name"
                type="text"
                required
                placeholder="Enter your full name"
                class="form-input"
                :disabled="isProcessing"
                autocomplete="name"
              >
            </div>

            <div>
              <label for="digital-email" class="form-label">
                Email Address <span class="text-red-500">*</span>
              </label>
              <input
                id="digital-email"
                v-model="formData.email"
                type="email"
                required
                placeholder="you@example.com"
                class="form-input"
                :disabled="isProcessing"
                autocomplete="email"
              >
              <p class="text-xs text-gray-500 mt-1">Download link will be sent to this email</p>
            </div>
            
            <!-- Order Summary -->
            <div class="bg-green-light rounded-xl p-4 space-y-2">
              <div class="flex justify-between text-gray-700">
                <span>Book:</span>
                <span class="font-medium">{{ bookTitle }}</span>
              </div>
              <div class="flex justify-between text-gray-700">
                <span>Format:</span>
                <span class="font-medium">PDF Digital Download</span>
              </div>
              <div class="flex justify-between text-gray-700">
                <span>Delivery:</span>
                <span class="font-medium text-blue-600">Instant via Email</span>
              </div>
              <div class="border-t border-green-200 my-2"></div>
              <div class="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span class="text-green-dark">{{ price }}</span>
              </div>
            </div>
            
            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isProcessing || !isFormValid"
              class="w-full bg-green-primary hover:bg-green-dark text-white py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
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
import { ref, reactive, computed, watch } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  bookTitle: String,
  author: String,
  price: String,
  bookCover: String,
  paystackKey: String,
  productId: {
    type: String,
    default: 'maceo-digital'
  },
  productPrice: {
    type: Number,
    default: 50000
  }
})

const emit = defineEmits(['close', 'payment-success', 'payment-error'])

const isProcessing = ref(false)

const formData = reactive({
  name: '',
  email: ''
})

const isFormValid = computed(() => {
  return formData.name && formData.email
})

// Clear form when modal opens
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    formData.name = ''
    formData.email = ''
    isProcessing.value = false
  }
})

function handleClose() {
  if (!isProcessing.value) {
    emit('close')
  }
}

async function processPayment() {
  if (!isFormValid.value) return
  
  isProcessing.value = true
  
  // Check if Paystack is loaded
  if (typeof window === 'undefined' || !window.PaystackPop) {
    emit('payment-error', 'Payment system not available. Please refresh and try again.')
    isProcessing.value = false
    return
  }
  
  // Amount in kobo
  const amount = props.productPrice * 100
  
  const handler = window.PaystackPop.setup({
    key: props.paystackKey,
    email: formData.email,
    amount: amount,
    currency: 'NGN',
    ref: `MACEO_${props.productId}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    metadata: {
      custom_fields: [
        {
          display_name: "Product",
          variable_name: "product_id",
          value: props.productId
        },
        {
          display_name: "Product Name",
          variable_name: "product_name",
          value: props.bookTitle
        },
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: formData.name
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
        email: formData.email,
        name: formData.name,
        amount: amount,
        productId: props.productId,
        productName: props.bookTitle
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
