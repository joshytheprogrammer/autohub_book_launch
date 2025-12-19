<template>
  <div 
    class="card card-hover cursor-pointer group"
    @click="$emit('select', product)"
    @keydown.enter="$emit('select', product)"
    tabindex="0"
    role="button"
    :aria-label="`View ${product.name} - ${product.priceDisplay}`"
  >
    <!-- Product Image -->
    <div class="relative overflow-hidden rounded-xl -mt-2 -mx-2 mb-4">
      <img 
        :src="product.coverImage" 
        :alt="product.name"
        class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <!-- Badge -->
      <div class="absolute top-3 left-3">
        <span 
          :class="[
            'text-white text-xs font-semibold px-3 py-1 rounded-full',
            product.isPhysical ? 'bg-amber-500' : 'bg-green-primary'
          ]"
        >
          {{ product.isPhysical ? 'Physical Copy' : 'Digital Download' }}
        </span>
      </div>
    </div>

    <!-- Product Info -->
    <div class="space-y-3">
      <div>
        <h3 class="font-semibold text-gray-900 text-lg leading-tight">{{ product.name }}</h3>
        <p class="text-sm text-gray-500 mt-1">by {{ product.author }}</p>
      </div>
      
      <p class="text-sm text-gray-600 line-clamp-2">{{ product.description }}</p>
      
      <!-- Features -->
      <ul class="space-y-1">
        <li 
          v-for="(feature, index) in product.features.slice(0, 3)" 
          :key="index"
          class="flex items-center text-xs text-gray-500"
        >
          <svg class="w-4 h-4 text-green-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {{ feature }}
        </li>
      </ul>

      <!-- Price & CTA -->
      <div class="flex items-center justify-between pt-3 border-t border-gray-100">
        <div>
          <span class="text-2xl font-bold text-green-dark">{{ product.priceDisplay }}</span>
          <span v-if="product.isPhysical" class="block text-xs text-amber-600 font-medium">Pay on Delivery</span>
        </div>
        <button 
          :class="[
            'btn py-2 px-4 text-sm',
            product.isPhysical ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'btn-primary'
          ]"
          @click.stop="$emit('purchase', product)"
        >
          {{ product.isPhysical ? 'Order Now' : 'Buy Now' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['select', 'purchase'])
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
