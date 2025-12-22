<template>
  <section class="bg-gradient-to-br from-green-dark to-emerald-accent text-white py-16 lg:py-24">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <!-- Book Cover -->
          <div class="flex-shrink-0">
            <MaceoBookCover />
          </div>
          
          <!-- Content -->
          <div class="flex-1 text-center lg:text-left">
            <div class="space-y-6">
              <div class="space-y-4">
                <h1 class="text-4xl lg:text-6xl font-bold leading-tight">
                  {{ title }}
                </h1>
                <p class="text-xl lg:text-2xl text-green-light font-medium">
                  by {{ author }}
                </p>
              </div>
              
              <p class="text-lg lg:text-xl text-white leading-relaxed max-w-2xl opacity-90">
                {{ subtitle }}
              </p>
              <div class="text-sm text-green-light space-y-2">
                <p class="flex items-center gap-2">
                  <span class="flex h-5 w-5 rounded-full bg-green-primary items-center justify-center">✨</span>
                  Available Now
                </p>
                <p class="flex items-center gap-2">
                  <span class="flex h-5 w-5 rounded-full bg-green-primary items-center justify-center">📚</span>
                  Digital + Physical copy
                </p>
              </div>
              
              <!-- Dual Purchase Buttons -->
              <div class="flex flex-col sm:flex-row gap-3 lg:justify-start justify-center">
                <!-- Digital Button (Primary) -->
                <button 
                  @click="$emit('order-digital')"
                  class="bg-white text-green-dark hover:bg-gray-100 px-6 py-4 rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-light focus:ring-opacity-50"
                  aria-label="Buy digital copy"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                  <span>Digital Copy</span>
                  <span class="font-bold">{{ price }}</span>
                </button>
                
                <!-- Physical Button (Secondary) -->
                <button 
                  @click="$emit('order-physical')"
                  class="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-light focus:ring-opacity-50"
                  aria-label="Order physical copy"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                  <span>Physical Copy</span>
                  <span class="font-bold">{{ price }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  coverSrc: String,
  title: String,
  subtitle: String,
  author: String,
  price: String
})

const emit = defineEmits(['order-digital', 'order-physical'])
</script>

<style scoped>
/* Simple transitions only */
.transition-all {
  transition: all 0.3s ease;
}
</style>
