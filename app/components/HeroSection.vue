// HeroSection.vue
<template>
  <section class="py-12 flex flex-col items-center text-center space-y-6 fade-in">
    <BookCover :coverSrc="coverSrc" :alt="title" />
    <h1 class="text-3xl font-bold leading-tight">{{ title }}</h1>
    <h2 class="text-lg text-gray-600 max-w-md">{{ subtitle }}</h2>
    <button @click="payWithPaystack" class="mt-4 px-8 py-3 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-800 transition">Preorder for ₦15,000</button>
  </section>
</template>

<script setup lang="ts">
import BookCover from './BookCover.vue'
const props = defineProps<{ coverSrc: string; title: string; subtitle: string }>()

function payWithPaystack() {
  // Paystack inline script will be loaded in main page
  // This function will be replaced by the parent
  // Emits event for parent to handle
  // (for SSR, Paystack should be loaded client-side only)
  // eslint-disable-next-line no-alert
  alert('Paystack integration will trigger here.')
}
</script>

<style scoped>
.fade-in {
  animation: fadeIn 1s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: none; }
}
</style>
