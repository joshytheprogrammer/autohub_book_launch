<template>
  <div 
    class="card card-hover cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-primary rounded-2xl"
    @click="$emit('click')"
    @keydown.enter="$emit('click')"
    tabindex="0"
    role="button"
    :aria-label="`View details for ${book.title} by ${book.author}`"
  >
    <!-- Book Cover -->
    <div class="overflow-hidden rounded-2xl -mt-6 -mx-6 mb-4">
      <img 
        :src="book.cover" 
        :alt="`Cover of ${book.title}`"
        class="w-full h-[300px] object-cover"
        loading="lazy"
      />
    </div>

    <!-- Title & Author -->
    <h3 class="h3 mb-1">{{ book.title }}</h3>
    <p class="text-sm font-medium text-gray-600 mb-2">by {{ book.author }}</p>

    <!-- Categories -->
    <div 
      v-if="book.categories && book.categories.length" 
      class="flex flex-wrap gap-2 mb-3"
      aria-label="Book categories"
    >
      <span 
        v-for="(category, i) in book.categories" 
        :key="i" 
        class="text-xs font-medium text-green-dark bg-green-light px-2 py-1 rounded-lg"
      >
        {{ category }}
      </span>
    </div>

    <!-- Description -->
    <p class="text-sm text-gray-600 mb-4 line-clamp-2">{{ book.description }}</p>

    <!-- Price & Action -->
    <div class="flex items-center justify-between pt-3 border-t border-gray-200 mt-3">
      <div class="text-lg font-bold text-green-dark" aria-label="Price">{{ book.price }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  book: {
    type: Object,
    required: true
  }
});

defineEmits(['click']);

const actionText = computed(() => {
  switch (props.book.status) {
    case 'preorder':
      return 'Pre-order';
    case 'available':
      return 'Buy Now';
    case 'coming-soon':
      return 'Coming Soon';
    default:
      return 'View Details';
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
