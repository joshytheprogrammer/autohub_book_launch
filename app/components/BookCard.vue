<template>
  <div class="bg-white rounded-lg shadow-md border border-gray-200 cursor-pointer" @click="$emit('click')">
    <!-- Book Cover -->
    <div class="overflow-hidden rounded-t-lg">
      <img 
        :src="book.cover" 
        :alt="book.title"
        class="w-full max-h-72 object-cover"
        loading="lazy"
      />
    </div>

    <!-- Book Info -->
    <div class="p-4">
      <!-- Title & Author -->
      <h3 class="text-lg font-bold text-gray-800 mb-1">{{ book.title }}</h3>
      <p class="text-sm text-gray-600 mb-2">by {{ book.author }}</p>

      <!-- Description -->
      <p class="text-sm text-gray-700 mb-3 line-clamp-2">{{ book.description }}</p>

      <!-- Price & Action -->
      <div class="flex items-center justify-between">
        <div class="text-lg font-bold text-gray-900">{{ book.price }}</div>
        <button class="bg-blue-600 text-white px-3 py-1 rounded text-sm">{{ actionText }}</button>
      </div>
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
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
