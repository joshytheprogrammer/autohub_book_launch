<template>
  <Teleport to="body">
    <div 
      v-if="isVisible" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog" 
      aria-modal="true"
    >
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <!-- Success Modal -->
      <div class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all">
        <!-- Success Animation -->
        <div class="text-center p-8">
          <!-- Animated Check Icon -->
          <div class="relative w-24 h-24 mx-auto mb-6">
            <div class="absolute inset-0 bg-green-light rounded-full animate-pulse"></div>
            <div class="relative w-24 h-24 bg-green-primary rounded-full flex items-center justify-center">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
          <p class="text-gray-600 mb-6">Your download link is on its way.</p>
          
          <!-- Order Details -->
          <div class="bg-gray-50 rounded-xl p-4 text-left space-y-3 mb-6">
            <div class="flex justify-between text-sm">
              <span class="text-gray-500">Reference:</span>
              <span class="font-mono text-gray-900 text-xs">{{ paymentData.reference }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-500">Email:</span>
              <span class="text-gray-900">{{ paymentData.email }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-500">Product:</span>
              <span class="text-gray-900">{{ paymentData.productName }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-500">Format:</span>
              <span class="font-semibold text-blue-600">Digital Download</span>
            </div>
          </div>
          
          <!-- Next Steps -->
          <div class="space-y-3 text-left mb-6">
            <p class="text-sm font-semibold text-gray-900">What happens next?</p>
            
            <div class="flex items-start gap-3 text-sm">
              <div class="w-6 h-6 bg-green-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-green-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <p class="text-gray-600">Check your email for the download link. It may take a few minutes to arrive.</p>
            </div>
            
            <div class="flex items-start gap-3 text-sm">
              <div class="w-6 h-6 bg-green-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-green-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </div>
              <p class="text-gray-600">Click the link to download your PDF file. You can download up to 3 times within 24 hours.</p>
            </div>
            
            <div class="flex items-start gap-3 text-sm">
              <div class="w-6 h-6 bg-green-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-green-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
                </svg>
              </div>
              <p class="text-gray-600">Save the file to your device after downloading for permanent access.</p>
            </div>
          </div>
          
          <!-- Direct Download Button (if available) -->
          <div v-if="downloadUrl" class="mb-4">
            <a 
              :href="downloadUrl"
              class="w-full bg-green-primary hover:bg-green-dark text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              target="_blank"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download Now
            </a>
            <p class="text-xs text-gray-500 mt-2">Link also sent to your email</p>
          </div>
          
          <button
            @click="$emit('close')"
            class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition-colors"
          >
            {{ downloadUrl ? 'Close' : 'Done' }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({
  isVisible: Boolean,
  paymentData: {
    type: Object,
    default: () => ({})
  },
  downloadUrl: {
    type: String,
    default: ''
  }
})

defineEmits(['close'])
</script>
