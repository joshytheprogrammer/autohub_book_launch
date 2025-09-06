<template>
  <div class="bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 p-8 transition-all duration-300 hover:-translate-y-2">
    <div class="text-center space-y-4">
      <div class="text-4xl mb-4 hover:scale-110 transition-transform duration-300">
        {{ icon }}
      </div>
      <h3 class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
        {{ title }}
      </h3>
      <p class="text-gray-600 leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
  title: String,
  description: String
})
</script>


