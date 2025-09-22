<template>
  <section id="about" class="py-16 lg:py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <!-- Introduction Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About MACEOS
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern Automotive CEOs - Revolutionizing Africa's Automotive Industry
          </p>
        </div>

        <!-- Main Content Grid -->
        <div class="grid lg:grid-cols-2 gap-12 items-center text-center mb-16">
          <!-- Text Content -->
          <div class="space-y-6">
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-gray-900">
                The Industry Gap That Inspired This Book
              </h3>
              <p class="text-gray-600 leading-relaxed">
                A treasure trove for all aspiring and established automotive CEOs. It covers land vehicles, aviation, AI, space exploration, and maritime. A blend I termed “Mobility Industry”; an advanced mobility and aerospace technologies.

              </p>
              <p class="text-gray-600 leading-relaxed">
                Its teachings are from the grassroots to the apex, covering key topics like measures to consider before venturing into the automotive industry, the scope of the industry, mechanism, modern technologies, structure, management, sales and marketing, automotive sectors, manufacturing, conglomerate building, the future of the industry, post-success, and so many other insightful topics that made this book a page-turner.

              </p>
              <p class="text-gray-600 leading-relaxed">
                After reading this book, you will abhor the practice of the conventional automotive entrepreneurs whose ambitions are to enrich themselves and retire without a plan for structure and transformation. A routine that has left a critical gap in Africa's automotive industry and stagnated its growth.

              </p>
              <p class="text-gray-600 leading-relaxed">
                This book x-rays the nitty-gritty, evolution, and wealth creation opportunities in the automotive industry.

              </p>
            </div>

            <div class="bg-green-50 p-6 rounded-xl">
              <h4 class="font-bold text-green-900 mb-3">What is MACEOS?</h4>
              <p class="text-green-800">
                MACEOS, which stands for Modern Automotive CEOs, is an initiative by Autohub Africa to educate and develop Modern Automotive CEOs in Africa and around the world. Both the MACEOS book and the academy serve as a blueprint for achieving this goal
              </p>
            </div>
          </div>

          <!-- Visual/Stats -->
          <div class="space-y-6">
            <div class="bg-gray-50 p-8 rounded-2xl">
              <h4 class="text-xl font-bold text-gray-900 mb-6 text-center">The Industry's Classification</h4>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-4 bg-white rounded-xl">
                  <div class="text-2xl mb-2">🚗</div>
                  <div class="font-semibold text-gray-900">Land Vehicles</div>
                </div>
                <div class="text-center p-4 bg-white rounded-xl">
                  <div class="text-2xl mb-2">✈️</div>
                  <div class="font-semibold text-gray-900">Aviation</div>
                </div>
                <div class="text-center p-4 bg-white rounded-xl">
                  <div class="text-2xl mb-2">🚢</div>
                  <div class="font-semibold text-gray-900">Maritime</div>
                </div>
                <div class="text-center p-4 bg-white rounded-xl">
                  <div class="text-2xl mb-2">🚀</div>
                  <div class="font-semibold text-gray-900">Space Exploration</div>
                </div>
                <div class="text-center p-4 bg-white rounded-xl">
                  <div class="text-2xl mb-2">🚀</div>
                  <div class="font-semibold text-gray-900">Artificial Intelligence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Benefits -->
        <div class="mb-16">
          <h3 class="text-3xl font-bold text-gray-900 text-center mb-12">
            Transform Your Automotive Journey
          </h3>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div class="w-16 h-16 bg-green-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎯
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-3">Strategic Vision</h4>
              <p class="text-gray-600">
                Move beyond buying and selling to creating a structured system that transforms the industry beyond the Third-World standard and aspiration.
              </p>
            </div>

            <div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💰
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-3">Wealth Creation</h4>
              <p class="text-gray-600">
                Learn proven strategies to create sustainable wealth while contributing positively to industry growth.
              </p>
            </div>

            <div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🌍
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-3">Global Impact</h4>
              <p class="text-gray-600">
                Build an inter-business community for maximum utilization of automotive products across sectors
              </p>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="bg-gradient-to-r from-green-900 to-green-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 class="text-3xl font-bold mb-4">Ready to Become a Modern Automotive CEO?</h3>
          <p class="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Read thoughtfully and apply all practical guidelines as you work towards becoming a successful Modern Automotive CEO.
          </p>
          <button 
            @click="$emit('preorder')"
            class="bg-white text-green-900 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
          >
            <span>Start Your Journey</span>
            <span class="font-bold">{{ price }}</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  price: {
    type: String,
    required: true
  }
})

defineEmits(['preorder'])
</script>
