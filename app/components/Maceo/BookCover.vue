<template>
  <div class="book-cover">
    <!-- Main Image Slider -->
    <div class="relative">
      <!-- Navigation Arrows -->
      <button 
        @click="prevSlide" 
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-r-lg z-10 focus:outline-none focus:ring-2 focus:ring-green-primary"
        aria-label="Previous slide"
      >
        <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <!-- Image Container -->
      <div class="overflow-hidden rounded-xl w-80 h-96 relative">
        <div 
          v-for="(image, index) in bookImages" 
          :key="image"
          class="absolute inset-0 transition-opacity duration-500"
          :class="currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
        >
          <img 
            :src="image" 
            :alt="`Modern Automotive CEO - View ${index + 1}`"
            class="w-full h-full object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </div>
      
      <button 
        @click="nextSlide" 
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-l-lg z-10 focus:outline-none focus:ring-2 focus:ring-green-primary"
        aria-label="Next slide"
      >
        <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
    
    <!-- Thumbnail Navigation -->
    <div class="flex justify-center mt-4 space-x-2">
      <button 
        v-for="(image, index) in bookImages" 
        :key="`thumb-${index}`"
        @click="currentSlide = index"
        :class="[
          'w-2 h-2 rounded-full transition-all duration-200',
          currentSlide === index ? 'bg-blue-900 scale-125' : 'bg-gray-300 hover:bg-gray-400'
        ]"
        :aria-label="`Go to slide ${index + 1}`"
        :aria-current="currentSlide === index"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Fixed book images - using the same image 5 times as placeholder
// In a real implementation, you would use 5 different images
const bookImages = [
  '/bookcovers/Book_cover.png',
  '/bookcovers/1758548610.png',
  '/bookcovers/1758548746.png',
  '/bookcovers/1758549470.png',
  '/bookcovers/Book_cover.jpg',
  '/bookcovers/mock-00054.png'
];

// Current slide index
const currentSlide = ref(0);

// Navigation methods
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % bookImages.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + bookImages.length) % bookImages.length;
};

// Auto-advance slides every 5 seconds
let slideInterval;
onMounted(() => {
  // Start the auto-rotation
  slideInterval = setInterval(() => {
    nextSlide();
  }, 5000);
});

onUnmounted(() => {
  // Clean up interval when component is destroyed
  clearInterval(slideInterval);
});
</script>

<style scoped>
.book-cover img:hover {
  transform: scale(1.02);
}

.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* The transition is now handled directly in the inline classes */
.book-cover {
  /* Ensuring the component has fixed dimensions */
  width: 320px; /* w-80 */
  position: relative;
}
</style>
