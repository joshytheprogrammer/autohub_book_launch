<template>
  <section class="py-16 lg:py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
    <div class="container mx-auto px-6">
      <div class="max-w-2xl mx-auto text-center space-y-8">
        <div class="space-y-4">
          <h2 class="text-3xl lg:text-4xl font-bold">
            Stay Updated on the Launch
          </h2>
          <p class="text-lg text-blue-100">
            Be the first to know when "Modern Automotive CEO" is available. 
            Get exclusive early access and special launch pricing.
          </p>
        </div>
        
        <form 
          @submit.prevent="onSubmit" 
          class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <div class="flex-1">
            <input 
              v-model="email" 
              type="email" 
              required 
              placeholder="Enter your email address"
              class="w-full px-6 py-4 text-gray-900 bg-white rounded-xl border-0 focus:ring-4 focus:ring-blue-300 focus:outline-none text-lg shadow-lg"
              :disabled="isSubmitting"
            />
          </div>
          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-xl"
          >
            <span v-if="!isSubmitting">Notify Me</span>
            <span v-else class="flex items-center gap-2">
              <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          </button>
        </form>
        
        <div v-if="submitted" class="flex items-center justify-center gap-2 text-green-300">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Thank you! We'll keep you updated.</span>
        </div>
        
        <p class="text-sm text-blue-200">
          🔒 We respect your privacy. No spam, unsubscribe anytime.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['email-captured'])

const email = ref('')
const isSubmitting = ref(false)
const submitted = ref(false)

async function onSubmit() {
  if (!email.value) return
  
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    emit('email-captured', email.value)
    submitted.value = true
    email.value = ''
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      submitted.value = false
    }, 3000)
  } catch (error) {
    console.error('Error submitting email:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
