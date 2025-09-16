<template>
  <section id="author" class="py-16 lg:py-24 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About the Author
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leader behind "Modern Automotive CEO"
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Author Image -->
          <div class="order-2 lg:order-1">
            <div class="relative">
              <div class="aspect-[4/5] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl overflow-hidden">
                <!-- Placeholder for author image -->
                <div class="w-full h-full flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-32 h-32 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span class="text-4xl font-bold text-white">CJ</span>
                    </div>
                    <p class="text-gray-600 text-sm">Author Photo Coming Soon</p>
                  </div>
                </div>
              </div>
              
              <!-- Decorative elements -->
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-blue-900 rounded-full opacity-10"></div>
              <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-600 rounded-full opacity-10"></div>
            </div>
          </div>

          <!-- Author Bio -->
          <div class="order-1 lg:order-2">
            <div class="space-y-6">
              <div>
                <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {{ author }}
                </h3>
                <p class="text-lg text-blue-900 font-medium mb-4">
                  Industry Visionary & Mobility Innovation Expert
                </p>
              </div>

              <div class="prose prose-lg text-gray-700 space-y-4">
                <p>
                  An industry pragmatist and mobility innovation expert, who believes that with advanced automotive technology, humanity can explore the universe and beyond. Chika Joel, also known as J-ib, is a passionate industry innovator with over a decade of experience in the automotive industry, spanning from classified services to transportation, engineering, automotive product sales, and brand management. 
                </p>
                
                <p>
                  His expertise encompasses the entire spectrum of modern transportation—from terrestrial vehicles and maritime systems to aviation and space exploration technologies. As an early advocate for AI integration in mobility solutions, Chika has been instrumental in bridging the gap between conventional automotive thinking and the revolutionary changes reshaping our industry.
                </p>

                <p>
                  Throughout his career, Chika Joel has documented everyday experiences, having worked with leading automotive companies, technology startups, and remotely with government agencies. This is all in an effort to develop strategic frameworks for the industry's transformation. His insights in revolutionizing the automotive industry have been an inspiration to the global automotive community.
                </p>
              </div>

              <!-- Connect Section -->
              <div class="pt-6 border-t border-gray-200">
                <h4 class="text-lg font-semibold text-gray-900 mb-3">Connect with Chika Joel</h4>
                <div class="flex flex-wrap gap-3">
                  <a href="#" class="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" class="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                    <span>Twitter</span>
                  </a>
                  <NuxtLink 
                    to="/contact"
                    class="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span>Contact</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  author: {
    type: String,
    required: true
  }
})
</script>
