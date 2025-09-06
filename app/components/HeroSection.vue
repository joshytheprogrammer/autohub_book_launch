<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
    <div class="absolute inset-0 bg-black/20"></div>
    <div class="relative z-10 container mx-auto px-6 py-16 lg:py-24">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <!-- Book Cover -->
        <div class="flex-shrink-0 fade-in-up">
          <BookCover 
            :cover-src="coverSrc" 
            :alt="`${title} by ${author}`"
            class="w-64 h-80 lg:w-72 lg:h-96 shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <!-- Content -->
        <div class="flex-1 text-center lg:text-left space-y-6 fade-in-up delay-200">
          <div class="space-y-4">
            <h1 class="text-4xl lg:text-6xl font-bold leading-tight">
              {{ title }}
            </h1>
            <p class="text-xl lg:text-2xl text-blue-100 font-light">
              by {{ author }}
            </p>
          </div>
          
          <p class="text-lg lg:text-xl text-blue-50 leading-relaxed max-w-2xl">
            {{ subtitle }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
            <button 
              @click="$emit('preorder')"
              class="group bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
              <span>Preorder Now</span>
              <span class="font-bold">{{ price }}</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
            
            <div class="text-sm text-blue-200">
              <p>✨ Early bird pricing</p>
              <p>📚 Digital + Physical copy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 bg-blue-300/10 rounded-full blur-2xl"></div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  coverSrc: string
  title: string
  subtitle: string
  author: string
  price: string
}

interface Emits {
  (e: 'preorder'): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<style scoped>
.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.delay-200 {
  animation-delay: 0.2s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive improvements */
@media (max-width: 1024px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>
