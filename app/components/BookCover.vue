<template>
  <div class="relative group">
    <img 
      :src="coverSrc" 
      :alt="alt" 
      :class="[
        'rounded-xl shadow-2xl object-cover transition-all duration-300',
        'group-hover:shadow-3xl group-hover:scale-[1.02]',
        customClass
      ]"
      loading="lazy"
    />
    <div class="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  coverSrc: string
  alt?: string
  customClass?: string
}

withDefaults(defineProps<Props>(), {
  alt: 'Book cover',
  customClass: 'w-48 h-64'
})
</script>

<style scoped>
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}
</style>
