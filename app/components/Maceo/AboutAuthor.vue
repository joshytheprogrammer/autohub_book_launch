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
              <div class="aspect-[4/5] bg-gradient-to-br from-green-100 to-indigo-100 rounded-2xl overflow-hidden">
                <!-- Placeholder for author image -->
                <img 
                  src="/maceo_author.jpg" 
                  alt="Chika Joel (J-ib)" 
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <!-- Decorative elements -->
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-green-900 rounded-full opacity-10"></div>
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
                <p class="text-lg text-green-900 font-medium mb-4">
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
                  <a href="https://www.linkedin.com/in/J-ib" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-green-900 hover:bg-green-700 text-white rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://www.instagram.com/lovej_ib" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <a href="https://twitter.com/lovej_ib" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span>X (Twitter)</span>
                  </a>
                  <a href="https://www.facebook.com/J-ib" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                  <a href="https://www.tiktok.com/@lovej_jib" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                    <span>TikTok</span>
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
