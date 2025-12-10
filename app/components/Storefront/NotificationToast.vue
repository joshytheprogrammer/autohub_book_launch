<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div 
        v-if="show" 
        class="fixed bottom-4 right-4 z-50 max-w-sm"
        role="alert"
        :aria-live="type === 'error' ? 'assertive' : 'polite'"
      >
        <div 
          :class="[
            'rounded-xl shadow-lg p-4 flex items-start gap-3',
            typeClasses
          ]"
        >
          <!-- Icon -->
          <div :class="['flex-shrink-0 p-1 rounded-full', iconBgClass]">
            <svg v-if="type === 'success'" class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <svg v-else-if="type === 'error'" class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <svg v-else-if="type === 'warning'" class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <svg v-else class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          
          <!-- Content -->
          <div class="flex-1 min-w-0">
            <p v-if="title" :class="['font-semibold text-sm', titleClass]">{{ title }}</p>
            <p :class="['text-sm', messageClass]">{{ message }}</p>
          </div>
          
          <!-- Close Button -->
          <button 
            @click="$emit('close')"
            :class="['flex-shrink-0 p-1 rounded-lg transition-colors', closeButtonClass]"
            aria-label="Dismiss notification"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  show: Boolean,
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'error', 'warning', 'info'].includes(value)
  },
  title: String,
  message: {
    type: String,
    required: true
  }
})

defineEmits(['close'])

const typeClasses = computed(() => {
  const classes = {
    success: 'bg-green-50 border border-green-200',
    error: 'bg-red-50 border border-red-200',
    warning: 'bg-amber-50 border border-amber-200',
    info: 'bg-blue-50 border border-blue-200'
  }
  return classes[props.type] || classes.info
})

const iconBgClass = computed(() => {
  const classes = {
    success: 'bg-green-100',
    error: 'bg-red-100',
    warning: 'bg-amber-100',
    info: 'bg-blue-100'
  }
  return classes[props.type] || classes.info
})

const titleClass = computed(() => {
  const classes = {
    success: 'text-green-800',
    error: 'text-red-800',
    warning: 'text-amber-800',
    info: 'text-blue-800'
  }
  return classes[props.type] || classes.info
})

const messageClass = computed(() => {
  const classes = {
    success: 'text-green-700',
    error: 'text-red-700',
    warning: 'text-amber-700',
    info: 'text-blue-700'
  }
  return classes[props.type] || classes.info
})

const closeButtonClass = computed(() => {
  const classes = {
    success: 'text-green-500 hover:bg-green-100',
    error: 'text-red-500 hover:bg-red-100',
    warning: 'text-amber-500 hover:bg-amber-100',
    info: 'text-blue-500 hover:bg-blue-100'
  }
  return classes[props.type] || classes.info
})
</script>
