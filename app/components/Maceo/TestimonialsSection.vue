<template>
  <section class="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
          What Industry Leaders Say
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Early reviews from automotive and technology experts
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Rating Stars -->
          <div class="flex justify-center mb-4">
            <div class="flex space-x-1">
              <svg
                v-for="star in testimonial.rating"
                :key="star"
                class="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
          </div>
          
          <!-- Quote -->
          <blockquote class="text-gray-700 text-center mb-6 leading-relaxed">
            "{{ testimonial.content }}"
          </blockquote>
          
          <!-- Author -->
          <div class="text-center">
            <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
            <div class="text-sm text-blue-600">{{ testimonial.role }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  testimonials: Array
})
</script>


