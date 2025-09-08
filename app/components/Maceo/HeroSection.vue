<template>
  <section class="bg-blue-900 text-white py-16 lg:py-24">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <!-- Book Cover -->
          <div class="flex-shrink-0">
            <MaceoBookCover 
              :cover-src="coverSrc" 
              :alt="`${title} by ${author}`"
              custom-class="w-64 h-80 lg:w-72 lg:h-96"
            />
          </div>
          
          <!-- Content -->
          <div class="flex-1 text-center lg:text-left">
            <div class="space-y-6">
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
              <div class="text-sm text-blue-200 space-y-1">
                <p>✨ Early bird pricing</p>
                <p>📚 Digital + Physical copy</p>
              </div>
              <button 
                @click="$emit('preorder')"
                class="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center lg:mx-0 mx-auto gap-3"
              >
                <span>Preorder Now</span>
                <span class="font-bold">{{ price }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
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

const emit = defineEmits(['preorder'])
</script>

<style scoped>
/* Simple transitions only */
.transition-all {
  transition: all 0.3s ease;
}
</style>
