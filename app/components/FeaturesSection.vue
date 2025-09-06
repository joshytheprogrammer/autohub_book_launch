<template>
  <section class="py-16 lg:py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
          What You'll Master
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive insights across five critical domains of modern mobility
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureCard
          v-for="(feature, index) in features"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
          :delay="index * 100"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
}

interface Props {
  features: Feature[]
}

defineProps<Props>()
</script>
