<template>
  <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    
    <!-- Success Modal -->
    <div class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all">
      <!-- Success Icon -->
      <div class="text-center p-8">
        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h2>
        
        <div class="space-y-4 text-left bg-gray-50 p-4 rounded-lg mb-6">
          <div class="flex justify-between">
            <span class="text-gray-600">Reference:</span>
            <span class="font-mono text-sm text-gray-900">{{ paymentData.reference }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Email:</span>
            <span class="text-gray-900">{{ paymentData.email }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Amount:</span>
            <span class="font-semibold text-gray-900">₦{{ formatAmount(paymentData.amount) }}</span>
          </div>
        </div>
        
        <div class="space-y-3 text-sm text-gray-600 mb-6">
          <p class="flex items-center gap-2">
            <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            A confirmation email has been sent to your inbox
          </p>
          <p class="flex items-center gap-2">
            <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            You'll receive the book download link within 24 hours
          </p>
          <p class="flex items-center gap-2">
            <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
            </svg>
            Physical copy will be shipped to your address
          </p>
        </div>
        
        <button
          @click="$emit('close')"
          class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isVisible: Boolean,
  paymentData: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['close'])

function formatAmount(amountInKobo) {
  return (amountInKobo / 100).toLocaleString()
}
</script>
