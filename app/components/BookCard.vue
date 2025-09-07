<template>
  <div 
    class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
    @click="$emit('click')"
  >
    <!-- Book Cover -->
    <div class="relative overflow-hidden rounded-t-xl">
      <div class="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200">
        <img 
          :src="book.cover" 
          :alt="book.title"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <!-- Status Badge -->
      <div class="absolute top-3 left-3">
        <span 
          class="px-3 py-1 rounded-full text-xs font-medium"
          :class="statusClasses"
        >
          {{ statusText }}
        </span>
      </div>

      <!-- Rating (if available) -->
      <div v-if="book.rating" class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
        <div class="flex items-center gap-1">
          <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span class="text-sm font-medium text-gray-700">{{ book.rating }}</span>
        </div>
      </div>

      <!-- Hover Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="absolute bottom-4 left-4 right-4 text-white">
          <div class="text-sm font-medium mb-1">Click to preview →</div>
        </div>
      </div>
    </div>

    <!-- Book Info -->
    <div class="p-6">
      <!-- Categories -->
      <div class="flex flex-wrap gap-2 mb-3">
        <span 
          v-for="category in book.categories?.slice(0, 2)" 
          :key="category"
          class="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
        >
          {{ category }}
        </span>
        <span 
          v-if="book.categories?.length > 2"
          class="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md"
        >
          +{{ book.categories.length - 2 }}
        </span>
      </div>

      <!-- Title & Author -->
      <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {{ book.title }}
      </h3>
      <p class="text-gray-600 mb-3">by {{ book.author }}</p>

      <!-- Description -->
      <p class="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
        {{ book.description }}
      </p>

      <!-- Features (if available) -->
      <div v-if="book.features?.length" class="mb-4">
        <div class="text-sm text-gray-600 mb-2">Key Features:</div>
        <ul class="space-y-1">
          <li 
            v-for="feature in book.features.slice(0, 2)" 
            :key="feature"
            class="flex items-center gap-2 text-sm text-gray-700"
          >
            <svg class="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span>{{ feature }}</span>
          </li>
          <li 
            v-if="book.features.length > 2"
            class="text-xs text-gray-500 ml-5"
          >
            +{{ book.features.length - 2 }} more features
          </li>
        </ul>
      </div>

      <!-- Price & Action -->
      <div class="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <div class="text-2xl font-bold text-gray-900">{{ book.price }}</div>
          <div v-if="book.releaseDate" class="text-xs text-gray-500">
            {{ releaseText }}
          </div>
        </div>
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
          <span>{{ actionText }}</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  book: {
    type: Object,
    required: true
  }
})

defineEmits(['click'])

const statusClasses = computed(() => {
  switch (props.book.status) {
    case 'preorder':
      return 'bg-orange-100 text-orange-700 border border-orange-200'
    case 'available':
      return 'bg-green-100 text-green-700 border border-green-200'
    case 'coming-soon':
      return 'bg-blue-100 text-blue-700 border border-blue-200'
    default:
      return 'bg-gray-100 text-gray-700 border border-gray-200'
  }
})

const statusText = computed(() => {
  switch (props.book.status) {
    case 'preorder':
      return 'Pre-order'
    case 'available':
      return 'Available'
    case 'coming-soon':
      return 'Coming Soon'
    default:
      return 'Available'
  }
})

const actionText = computed(() => {
  switch (props.book.status) {
    case 'preorder':
      return 'Learn more'
    case 'available':
      return 'Buy Now'
    case 'coming-soon':
      return 'Learn More'
    default:
      return 'View Details'
  }
})

const releaseText = computed(() => {
  if (!props.book.releaseDate) return ''
  
  const releaseDate = new Date(props.book.releaseDate)
  const now = new Date()
  
  if (releaseDate > now) {
    return `Releases ${releaseDate.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })}`
  }
  
  return `Released ${releaseDate.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })}`
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
