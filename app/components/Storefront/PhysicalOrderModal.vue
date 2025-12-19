<template>
  <Teleport to="body">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="order-modal-title"
    >
      <!-- Backdrop -->
      <div 
        class="absolute inset-0 bg-black/60 backdrop-blur-sm"
        @click="handleClose"
      ></div>
      
      <!-- Modal -->
      <div class="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto transform transition-all">
        <!-- Header -->
        <div class="sticky top-0 bg-gradient-to-r from-green-dark to-emerald-accent text-white p-5 rounded-t-2xl z-10">
          <div class="flex items-center justify-between">
            <h2 id="order-modal-title" class="text-xl font-semibold">Order Physical Copy</h2>
            <button 
              @click="handleClose"
              :disabled="isSubmitting"
              class="text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 disabled:opacity-50"
              aria-label="Close modal"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Content -->
        <div class="p-6">
          <!-- Product Summary -->
          <div v-if="product" class="flex gap-4 p-4 bg-gray-50 rounded-xl mb-6">
            <img 
              :src="product.coverImage" 
              :alt="product.name" 
              class="w-20 h-24 object-cover rounded-lg shadow-md"
            >
            <div class="flex-1">
              <h3 class="font-semibold text-gray-900">{{ product.name }}</h3>
              <p class="text-sm text-gray-500 mt-1">by {{ product.author }}</p>
              <p class="text-lg font-bold text-green-dark mt-2">{{ product.priceDisplay }}</p>
            </div>
          </div>

          <!-- Pay on Delivery Info -->
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
              <div>
                <p class="text-sm text-amber-800 font-medium">Pay on Delivery</p>
                <p class="text-xs text-amber-700 mt-1">
                  No payment required now. You'll pay {{ product?.priceDisplay }} when your order arrives.
                  Delivery typically takes 3-7 business days within Nigeria.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Order Form -->
          <form @submit.prevent="submitOrder" class="space-y-4">
            <div>
              <label for="order-name" class="form-label">
                Full Name <span class="text-red-500">*</span>
              </label>
              <input
                id="order-name"
                v-model="formData.name"
                type="text"
                required
                placeholder="Enter your full name"
                class="form-input"
                :disabled="isSubmitting"
                autocomplete="name"
              >
            </div>

            <div>
              <label for="order-email" class="form-label">
                Email Address <span class="text-red-500">*</span>
              </label>
              <input
                id="order-email"
                v-model="formData.email"
                type="email"
                required
                placeholder="you@example.com"
                class="form-input"
                :disabled="isSubmitting"
                autocomplete="email"
              >
              <p class="text-xs text-gray-500 mt-1">Order confirmation will be sent here</p>
            </div>
            
            <div>
              <label for="order-phone" class="form-label">
                Phone Number <span class="text-red-500">*</span>
              </label>
              <input
                id="order-phone"
                v-model="formData.phone"
                type="tel"
                required
                placeholder="e.g., 08012345678"
                class="form-input"
                :disabled="isSubmitting"
                autocomplete="tel"
              >
              <p class="text-xs text-gray-500 mt-1">We'll call this number for delivery coordination</p>
            </div>
            
            <div>
              <label for="order-address" class="form-label">
                Delivery Address <span class="text-red-500">*</span>
              </label>
              <textarea
                id="order-address"
                v-model="formData.address"
                required
                rows="3"
                placeholder="Enter your full delivery address including city and state"
                class="form-input resize-none"
                :disabled="isSubmitting"
                autocomplete="street-address"
              ></textarea>
            </div>

            <div>
              <label for="order-state" class="form-label">
                State <span class="text-red-500">*</span>
              </label>
              <select
                id="order-state"
                v-model="formData.state"
                required
                class="form-input"
                :disabled="isSubmitting"
              >
                <option value="">Select your state</option>
                <option v-for="state in nigerianStates" :key="state" :value="state">{{ state }}</option>
              </select>
            </div>
            
            <!-- Order Summary -->
            <div class="bg-green-light rounded-xl p-4 space-y-2">
              <div class="flex justify-between text-gray-700">
                <span>Product:</span>
                <span class="font-medium">{{ product?.name }}</span>
              </div>
              <div class="flex justify-between text-gray-700">
                <span>Format:</span>
                <span class="font-medium">Physical Book (Hard Copy)</span>
              </div>
              <div class="flex justify-between text-gray-700">
                <span>Delivery:</span>
                <span class="font-medium">3-7 business days</span>
              </div>
              <div class="border-t border-green-200 my-2"></div>
              <div class="flex justify-between text-lg font-bold">
                <span>Pay on Delivery:</span>
                <span class="text-green-dark">{{ product?.priceDisplay }}</span>
              </div>
            </div>
            
            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting || !isFormValid"
              class="w-full btn btn-primary py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting" class="flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Place Order
              </span>
              <span v-else class="flex items-center justify-center gap-2">
                <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            </button>
          </form>
          
          <!-- Info Footer -->
          <div class="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <span>Your information is secure and will only be used for delivery</span>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  product: Object
})

const emit = defineEmits(['close', 'order-success', 'order-error'])

const isSubmitting = ref(false)

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
  state: ''
})

const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe',
  'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
  'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
  'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
]

const isFormValid = computed(() => {
  return formData.name && formData.email && formData.phone && formData.address && formData.state
})

// Clear form when modal opens
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    formData.name = ''
    formData.email = ''
    formData.phone = ''
    formData.address = ''
    formData.state = ''
    isSubmitting.value = false
  }
})

function handleClose() {
  if (!isSubmitting.value) {
    emit('close')
  }
}

async function submitOrder() {
  if (!isFormValid.value || !props.product) return
  
  isSubmitting.value = true
  
  try {
    const response = await $fetch('/api/place-physical-order', {
      method: 'POST',
      body: {
        productId: props.product.id,
        productName: props.product.name,
        productPrice: props.product.priceDisplay,
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        deliveryAddress: formData.address,
        deliveryState: formData.state
      }
    })
    
    if (response.body?.success) {
      emit('order-success', {
        orderReference: response.body.orderReference,
        email: formData.email,
        name: formData.name,
        productName: props.product.name
      })
    } else {
      throw new Error(response.body?.error || 'Failed to place order')
    }
  } catch (error) {
    console.error('Order submission error:', error)
    emit('order-error', error.message || 'Failed to place order. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
