<template>
  <section class="py-16 lg:py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why This Book Changes Everything
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            It is a gap filler! Its inspired revolutionary approach to the industry's transformation and growth in Africa is workable and practically demonstrated.
          </p>
        </div>

        <!-- The Problem -->
        <div class="mb-16">
          <div class="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl mb-8">
            <h3 class="text-2xl font-bold text-red-900 mb-4 flex items-center gap-3">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              The Industry Problem
            </h3>
            <p class="text-red-800 text-lg leading-relaxed">
              <strong>"Everyone is comfortable with the buying and selling routine!"</strong>
            </p>
            <p class="text-red-700 mt-4">
              The automotive entrepreneurs simply want to enrich themselves and retire without a plan for structure and transformation. This mindset has stagnated Africa's automotive industry and limited its global potential.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <div class="text-4xl mb-4">📉</div>
              <h4 class="text-xl font-bold text-gray-900 mb-3">Limited Vision</h4>
              <p class="text-gray-600">Most entrepreneurs focus only on immediate profits without long-term industry transformation</p>
            </div>
            
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <div class="text-4xl mb-4">🔄</div>
              <h4 class="text-xl font-bold text-gray-900 mb-3">Repetitive Cycles</h4>
              <p class="text-gray-600">Buying and selling without innovation, manufacturing, or technological advancement</p>
            </div>
            
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <div class="text-4xl mb-4">🚫</div>
              <h4 class="text-xl font-bold text-gray-900 mb-3">Missed Opportunities</h4>
              <p class="text-gray-600">Ignoring massive opportunities in AI, space exploration, manufacturing, and global expansion</p>
            </div>
          </div>
        </div>

        <!-- The Solution -->
        <div class="mb-16">
          <div class="bg-green-50 border-l-4 border-green-500 p-8 rounded-r-xl mb-8">
            <h3 class="text-2xl font-bold text-green-900 mb-4 flex items-center gap-3">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
              The MACEOS Solution
            </h3>
            <p class="text-green-800 text-lg leading-relaxed">
              Transform the entire automotive bionetwork by developing Modern Automotive CEOs who understand the industry's nitty-gritty, evolution, and wealth creation opportunities.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <div class="space-y-6">
              <h4 class="text-2xl font-bold text-gray-900">Revolutionary Approach</h4>
              <div class="space-y-4">
                <div v-for="approach in revolutionaryApproaches" :key="approach.title" class="flex gap-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-green-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h5 class="font-bold text-gray-900">{{ approach.title }}</h5>
                    <p class="text-gray-600 text-sm">{{ approach.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <h4 class="text-2xl font-bold text-gray-900">Unique Differentiators</h4>
              <div class="space-y-4">
                <div v-for="differentiator in differentiators" :key="differentiator.title" class="flex gap-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    ★
                  </div>
                  <div>
                    <h5 class="font-bold text-gray-900">{{ differentiator.title }}</h5>
                    <p class="text-gray-600 text-sm">{{ differentiator.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Impact -->
        <div class="bg-gradient-to-r from-green-900 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold mb-4">The Transformational Impact</h3>
            <p class="text-xl text-green-100 max-w-3xl mx-auto">
              When you master the MACEOS methodology, you don't just build a business - you transform an entire industry
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                🏭
              </div>
              <h4 class="text-xl font-bold mb-3">Industry Transformation</h4>
              <p class="text-green-100">Create manufacturing capabilities, innovation centers, and technological advancement</p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                🌍
              </div>
              <h4 class="text-xl font-bold mb-3">Economic Impact</h4>
              <p class="text-green-100">Generate employment, foreign exchange, and contribute to national economic development</p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                🚀
              </div>
              <h4 class="text-xl font-bold mb-3">Future Leadership</h4>
              <p class="text-green-100">Pioneer next-generation automotive technologies and global market expansion</p>
            </div>
          </div>

          <div class="text-center mt-12">
            <button 
              @click="$emit('preorder')"
              class="bg-white text-green-900 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
            >
              <span>Join The Transformation</span>
              <span class="font-bold">{{ price }}</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
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

const revolutionaryApproaches = [
  {
    title: "Holistic Industry View",
    description: "Cover all automotive sectors: land, sea, air, space, and AI integration"
  },
  {
    title: "Practical Implementation",
    description: "Real-world guidelines that can be applied immediately in any automotive business"
  },
  {
    title: "Wealth Creation Focus",
    description: "Proven financial strategies for building sustainable automotive wealth"
  },
  {
    title: "Global Perspective",
    description: "International business strategies and cross-border expansion techniques"
  }
]

const differentiators = [
  {
    title: "Manufacturing Mastery",
    description: "The only book that covers automotive manufacturing across ALL sectors including space technology"
  },
  {
    title: "Character Development",
    description: "Unique focus on building CEO character traits essential for automotive leadership"
  },
  {
    title: "Future Technologies",
    description: "Integration of AI, space exploration, and emerging technologies in automotive business"
  },
  {
    title: "Conglomerate Building",
    description: "Step-by-step guide to scaling from startup to global automotive empire"
  }
]
</script>
