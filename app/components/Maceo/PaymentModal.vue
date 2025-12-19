<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="payment-modal-title">
    <!-- Backdrop -->
    <div 
      class="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
      @click="closeModal"
    ></div>
    
    <!-- Modal -->
    <div class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all">
      <!-- Header -->
      <div class="bg-gradient-to-r from-green-dark to-emerald-accent text-white p-6 rounded-t-2xl">
        <div class="flex items-center justify-between">
          <h2 id="payment-modal-title" class="text-xl font-semibold">Complete Your Order</h2>
          <button 
            @click="closeModal"
            class="text-white hover:text-green-light transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-light"
            aria-label="Close modal"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Content -->
      <div class="p-6">
        <!-- Book Info -->
        <div class="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
          <img src="/bookcovers/mock-00054.png" :alt="bookTitle" class="w-16 h-20 object-cover rounded-lg shadow-md">
          <div>
            <h3 class="font-semibold text-gray-900">{{ bookTitle }}</h3>
            <p class="text-sm text-gray-600">by {{ author }}</p>
            <p class="text-lg font-bold text-green-900" aria-label="Price">{{ price }}</p>
          </div>
        </div>
        
        <!-- Payment Form -->
        <form @submit.prevent="processPayment" class="space-y-4" aria-describedby="payment-instructions">
          <p id="payment-instructions" class="sr-only">Please fill in the form below to complete your book order.</p>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span class="text-red-500" aria-hidden="true">*</span><span class="sr-only">required</span>
            </label>
            <input
              id="email"
              v-model="customerEmail"
              type="email"
              required
              placeholder="Enter your email address"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              :disabled="isProcessing"
              aria-label="Email Address"
            >
          </div>
          
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span class="text-red-500" aria-hidden="true">*</span><span class="sr-only">required</span>
            </label>
            <input
              id="name"
              v-model="customerName"
              type="text"
              required
              placeholder="Enter your full name"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              :disabled="isProcessing"
            >
          </div>
          
          <!-- Payment Summary -->
          <div class="bg-green-light p-4 rounded-2xl" aria-labelledby="payment-summary">
            <h4 id="payment-summary" class="sr-only">Payment Summary</h4>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-700">Book Price:</span>
              <span class="font-semibold">{{ price }}</span>
            </div>
            <div class="flex justify-between items-center font-bold text-lg">
              <span>Total:</span>
              <span class="text-green-dark">{{ price }}</span>
            </div>
          </div>
          
          <!-- Payment Button -->
          <button
            type="submit"
            :disabled="isProcessing || !customerEmail || !customerName"
            class="w-full bg-green-primary hover:bg-green-dark text-white py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-primary focus:ring-opacity-50"
            aria-live="polite"
          >
            <span v-if="!isProcessing">Pay Securely with Paystack</span>
            <span v-else class="flex items-center gap-2">
              <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          </button>
        </form>
        
        <!-- Security Info -->
        <div class="mt-4 flex items-center gap-2 text-sm text-gray-600">
          <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
          <span>Secure payment powered by Paystack</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  bookTitle: String,
  author: String,
  price: String,
  bookCover: String,
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

function closeModal() {
  if (!isProcessing.value) {
    emit('close')
  }
}

function processPayment() {
  if (!customerEmail.value || !customerName.value) return
  
  isProcessing.value = true
  
  // Check if Paystack is loaded
  if (typeof window === 'undefined' || !window.PaystackPop) {
    emit('payment-error', 'Payment system not available. Please try again later.')
    isProcessing.value = false
    return
  }
  
  // Parse price to get amount in kobo
  const priceString = props.price.replace('₦', '').replace(',', '')
  const amount = parseInt(priceString) * 100 // Convert to kobo
  
  const handler = window.PaystackPop.setup({
    key: props.paystackKey,
    email: customerEmail.value,
    amount: amount,
    currency: 'NGN',
    ref: `MACEO_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    metadata: {
      custom_fields: [
        {
          display_name: "Book Title",
          variable_name: "book_title",
          value: props.bookTitle
        },
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: customerName.value
        }
      ]
    },
    callback: function(response) {
      isProcessing.value = false
      emit('payment-success', {
        reference: response.reference,
        email: customerEmail.value,
        name: customerName.value,
        amount: amount,
        bookTitle: props.bookTitle
      })
    },
    onClose: function() {
      isProcessing.value = false
      // Don't emit error on close, user might have cancelled intentionally
    }
  })
  
  handler.openIframe()
}
</script>
