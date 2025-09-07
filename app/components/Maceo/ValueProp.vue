<template>
  <section class="py-16 lg:py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <div class="space-y-6">
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Transform Your Leadership in the 
            <span class="text-blue-600">New Era of Mobility</span>
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Navigate the convergence of traditional automotive excellence with cutting-edge innovations in AI, space technology, and multi-domain transportation systems.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div class="space-y-3">
            <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Industry Insights</h3>
            <p class="text-gray-600">Deep analysis from 20+ years of automotive leadership experience</p>
          </div>
          
          <div class="space-y-3">
            <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Future-Ready Strategies</h3>
            <p class="text-gray-600">Practical frameworks for navigating technological disruption</p>
          </div>
          
          <div class="space-y-3">
            <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Global Perspective</h3>
            <p class="text-gray-600">Cross-domain expertise spanning five mobility sectors</p>
          </div>
        </div>
        
        <!-- Call to Action -->
        <div class="mt-12">
          <MaceoPreorderButton 
            text="Get Your Copy Now"
            :price="price"
            custom-class="mx-auto"
            @click="$emit('preorder')"
          />
          <p class="text-sm text-gray-500 mt-3 text-center">
            📦 Free shipping worldwide • 🔒 Secure payment • 📱 Instant digital access
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  price: {
    type: String,
    default: '₦50,000'
  }
})

defineEmits(['preorder'])
</script>
