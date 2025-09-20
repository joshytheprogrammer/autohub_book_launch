<template>
  <button 
    @click="$emit('click')"
    :disabled="disabled"
    :class="[
      'bg-white text-green-900 border border-green-100 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3',
      disabled ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1',
      fullWidth ? 'w-full justify-center' : '',
      customClass
    ]"
    :aria-label="ariaLabel || text + (price ? ' - ' + price : '')"
    role="button"
  >
    <span>{{ text }}</span>
    <span v-if="price" class="font-bold">{{ price }}</span>
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Preorder Now'
  },
  price: String,
  disabled: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  customClass: {
    type: String,
    default: ''
  },
  ariaLabel: {
    type: String,
    default: ''
  }
})

defineEmits(['click'])
</script>
