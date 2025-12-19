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
          
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
          <p class="text-gray-600 mb-6">Your order confirmation has been sent to your email.</p>
          
          <!-- Order Details -->
          <div class="bg-gray-50 rounded-xl p-4 text-left space-y-3 mb-6">
            <div class="flex justify-between text-sm">
              <span class="text-gray-500">Order Reference:</span>
              <span class="font-mono text-gray-900 text-xs">{{ orderData.orderReference }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-500">Email:</span>
              <span class="text-gray-900">{{ orderData.email }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-500">Book:</span>
              <span class="text-gray-900">Modern Automotive CEO</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-500">Payment:</span>
              <span class="font-semibold text-amber-600">Pay on Delivery</span>
            </div>
          </div>
          
          <!-- Next Steps -->
          <div class="space-y-3 text-left mb-6">
            <p class="text-sm font-semibold text-gray-900">What happens next?</p>
            
            <div class="flex items-start gap-3 text-sm">
              <div class="w-6 h-6 bg-green-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-green-dark font-bold text-xs">1</span>
              </div>
              <p class="text-gray-600">Check your email for order confirmation with full details.</p>
            </div>
            
            <div class="flex items-start gap-3 text-sm">
              <div class="w-6 h-6 bg-green-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-green-dark font-bold text-xs">2</span>
              </div>
              <p class="text-gray-600">We'll process and ship your book within 1-2 business days.</p>
            </div>
            
            <div class="flex items-start gap-3 text-sm">
              <div class="w-6 h-6 bg-green-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-green-dark font-bold text-xs">3</span>
              </div>
              <p class="text-gray-600">Our delivery partner will contact you before delivery.</p>
            </div>

            <div class="flex items-start gap-3 text-sm">
              <div class="w-6 h-6 bg-green-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-green-dark font-bold text-xs">4</span>
              </div>
              <p class="text-gray-600">Pay the delivery person when you receive your book.</p>
            </div>
          </div>
          
          <button
            @click="$emit('close')"
            class="w-full bg-green-primary hover:bg-green-dark text-white py-3 rounded-xl font-semibold transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({
  isVisible: Boolean,
  orderData: {
    type: Object,
    default: () => ({})
  }
})

defineEmits(['close'])
</script>
