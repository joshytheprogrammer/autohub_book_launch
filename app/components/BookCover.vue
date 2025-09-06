// BookCover.vue
<template>
  <div class="flex justify-center items-center">
    <img :src="coverSrc" :alt="alt" class="rounded-lg shadow-lg w-48 h-64 object-cover" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ coverSrc: string; alt?: string }>()
</script>
