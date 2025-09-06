// FeatureCard.vue
<template>
  <div class="flex flex-col items-center bg-white rounded-lg shadow p-4 transition hover:shadow-lg fade-in">
    <div class="text-3xl mb-2">{{ icon }}</div>
    <div class="font-semibold text-gray-800">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ icon: string; label: string }>()
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.8s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
}
</style>
