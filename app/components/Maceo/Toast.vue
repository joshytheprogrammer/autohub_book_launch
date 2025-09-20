<template>
  <transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="show" 
      class="fixed bottom-4 right-4 z-50" 
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div :class="[
        'max-w-sm w-full shadow-lg rounded-2xl pointer-events-auto border overflow-hidden',
        typeClasses
      ]">
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="h-6 w-6 flex items-center justify-center">
                <!-- Success Icon -->
                <svg v-if="type === 'success'" class="h-6 w-6 text-green-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                
                <!-- Error Icon -->
                <svg v-if="type === 'error'" class="h-6 w-6 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                
                <!-- Warning Icon -->
                <svg v-if="type === 'warning'" class="h-6 w-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                
                <!-- Info Icon -->
                <svg v-if="type === 'info'" class="h-6 w-6 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium">{{ title }}</p>
              <p v-if="message" class="mt-1 text-sm opacity-80">{{ message }}</p>
            </div>
            <div class="ml-4 flex-shrink-0 flex">
              <button
                @click="close"
                class="rounded-xl inline-flex p-2 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                :class="closeButtonClasses"
                aria-label="Close notification"
              >
                <span class="sr-only">Close</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed, onMounted } from 'vue'

const props = defineProps({
  show: Boolean,
  type: {
    type: String,
    default: 'success', // success, error, warning, info
    validator: (value) => ['success', 'error', 'warning', 'info'].includes(value)
  },
  title: String,
  message: String,
  autoClose: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 5000
  }
})

const emit = defineEmits(['close'])

const typeClasses = computed(() => {
  const classes = {
    success: 'bg-green-light border-green-200 text-green-dark',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    info: 'bg-green-50 border-green-200 text-green-800'
  }
  return classes[props.type]
})

const closeButtonClasses = computed(() => {
  const classes = {
    success: 'text-green-dark hover:bg-green-200 focus:ring-green-primary',
    error: 'text-red-600 hover:bg-red-100 focus:ring-red-500',
    warning: 'text-amber-600 hover:bg-amber-100 focus:ring-amber-500',
    info: 'text-green-600 hover:bg-green-100 focus:ring-green-500'
  }
  return classes[props.type]
})

// No longer need iconComponent as we're using inline SVG based on type

function close() {
  emit('close')
}

onMounted(() => {
  if (props.autoClose && props.show) {
    setTimeout(() => {
      close()
    }, props.duration)
  }
})
</script>
