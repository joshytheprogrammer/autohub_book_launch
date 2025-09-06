<template>
  <div 
    class="group bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 p-8 transition-all duration-300 hover:-translate-y-2 fade-in-up"
    :style="{ animationDelay: `${delay}ms` }"
  >
    <div class="text-center space-y-4">
      <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {{ icon }}
      </div>
      <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
        {{ title }}
      </h3>
      <p class="text-gray-600 leading-relaxed">
        {{ description }}
      </p>
    </div>
    
    <!-- Decorative gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
  delay?: number
}

withDefaults(defineProps<Props>(), {
  delay: 0
})
</script>

<style scoped>
.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
