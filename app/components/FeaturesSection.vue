// FeaturesSection.vue
<template>
  <section class="py-8">
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
      <FeatureCard icon="🚗" label="Land Vehicle" />
      <FeatureCard icon="✈️" label="Aviation" />
      <FeatureCard icon="🚢" label="Maritime" />
      <FeatureCard icon="🛰️" label="Space Exploration" />
      <FeatureCard icon="🤖" label="AI" />
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureCard from './FeatureCard.vue'
</script>
