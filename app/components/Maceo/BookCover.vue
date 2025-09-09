<template>
  <div class="book-cover">
    <img 
      :src="coverSrc" 
      :alt="alt" 
      :class="['rounded-xl object-cover transition-all duration-300 ', customClass]"
      loading="lazy"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  coverSrc: String,
  alt: {
    type: String,
    default: 'Book cover'
  },
  customClass: {
    type: String,
    default: 'w-48 h-64'
  }
})
</script>

<style scoped>
.book-cover img:hover {
  transform: scale(1.02);
}

.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}
</style>
