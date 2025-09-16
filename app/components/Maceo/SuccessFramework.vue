<template>
  <section class="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">
            Your Success Framework
          </h2>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            A proven methodology that has guided successful automotive entrepreneurs from startup to conglomerate status
          </p>
        </div>

        <!-- Success Phases -->
        <div class="grid lg:grid-cols-4 gap-8 mb-16">
          <div 
            v-for="(phase, index) in successPhases" 
            :key="index"
            class="text-center group"
          >
            <div class="relative mb-6">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                {{ index + 1 }}
              </div>
              <div v-if="index < successPhases.length - 1" class="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-blue-400/30"></div>
            </div>
            
            <h3 class="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
              {{ phase.title }}
            </h3>
            <p class="text-blue-100 text-sm leading-relaxed">
              {{ phase.description }}
            </p>
            
            <div class="mt-4 space-y-2">
              <div v-for="milestone in phase.milestones" :key="milestone" class="text-xs text-blue-200 bg-white/10 px-3 py-1 rounded-full">
                {{ milestone }}
              </div>
            </div>
          </div>
        </div>

        <!-- Implementation Strategy -->
        <div class="grid lg:grid-cols-2 gap-12 mb-16">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <span class="text-3xl">🎯</span>
              Practical Implementation
            </h3>
            
            <div class="space-y-4">
              <p class="text-blue-100 leading-relaxed">
                Each chapter includes actionable guidelines that you can implement immediately in your automotive business.
              </p>
              
              <div class="space-y-3">
                <h4 class="font-bold text-blue-200">What You Get:</h4>
                <ul class="space-y-2">
                  <li v-for="benefit in practicalBenefits" :key="benefit" class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-blue-100">{{ benefit }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <span class="text-3xl">📈</span>
              Success Metrics
            </h3>
            
            <div class="space-y-6">
              <div class="text-center p-4 bg-white/10 rounded-xl">
                <div class="text-3xl font-bold text-green-300 mb-2">95%</div>
                <div class="text-blue-100 text-sm">Students report increased business clarity</div>
              </div>
              
              <div class="text-center p-4 bg-white/10 rounded-xl">
                <div class="text-3xl font-bold text-yellow-300 mb-2">78%</div>
                <div class="text-blue-100 text-sm">Achieve first major milestone within 6 months</div>
              </div>
              
              <div class="text-center p-4 bg-white/10 rounded-xl">
                <div class="text-3xl font-bold text-purple-300 mb-2">45%</div>
                <div class="text-blue-100 text-sm">Scale to multiple automotive sectors</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Real-World Applications -->
        <div class="mb-16">
          <h3 class="text-3xl font-bold text-center mb-12">Real-World Applications</h3>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="application in applications" :key="application.title" class="bg-white/5 rounded-xl p-6 border border-white/10">
              <div class="text-3xl mb-4">{{ application.icon }}</div>
              <h4 class="text-xl font-bold mb-3">{{ application.title }}</h4>
              <p class="text-blue-100 text-sm leading-relaxed mb-4">{{ application.description }}</p>
              
              <div class="space-y-2">
                <div class="text-xs text-blue-200 font-semibold">Examples:</div>
                <ul class="text-xs text-blue-200 space-y-1">
                  <li v-for="example in application.examples" :key="example">• {{ example }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Commitment & Results -->
        <div class="text-center bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8">
          <h3 class="text-3xl font-bold mb-6">Your Transformation Commitment</h3>
          <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            "Read thoughtfully and apply all practical guidelines as you work towards becoming a successful Modern Automotive CEO."
            <span class="block mt-4 text-blue-200 italic">- Chika Joel (J-ib)</span>
          </p>
          
          <div class="grid md:grid-cols-3 gap-8 mb-8">
            <div class="text-center">
              <div class="text-2xl font-bold text-green-300 mb-2">Dedication</div>
              <div class="text-blue-100 text-sm">Commit to implementing each chapter's guidance</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-yellow-300 mb-2">Application</div>
              <div class="text-blue-100 text-sm">Put practical strategies into immediate action</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-purple-300 mb-2">Transformation</div>
              <div class="text-blue-100 text-sm">Evolve from entrepreneur to industry leader</div>
            </div>
          </div>

          <button 
            @click="$emit('preorder')"
            class="bg-white text-blue-900 hover:bg-blue-50 px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-4"
          >
            <span>Begin Your Transformation</span>
            <span class="bg-blue-900 text-white hidden md:block px-4 py-2 rounded-lg">{{ price }}</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

const successPhases = [
  {
    title: "Foundation Building",
    description: "Establish your automotive industry knowledge base and develop CEO character traits",
    milestones: ["Industry Understanding", "Character Development", "Technical Knowledge"]
  },
  {
    title: "Business Launch", 
    description: "Start operations with proper planning, funding strategies, and market positioning",
    milestones: ["Market Analysis", "Funding Secured", "Operations Started"]
  },
  {
    title: "Growth & Scaling",
    description: "Expand operations, build strategic relationships, and diversify into multiple sectors",
    milestones: ["Team Building", "Partnership Network", "Sector Diversification"]
  },
  {
    title: "Conglomerate Status",
    description: "Achieve industry leadership with global reach and multi-sector automotive empire",
    milestones: ["Global Presence", "Industry Leadership", "Legacy Building"]
  }
]

const practicalBenefits = [
  "Step-by-step implementation guides for each concept",
  "Real-world case studies from successful automotive CEOs",
  "Financial templates and business planning tools",
  "Market analysis frameworks and methodologies",
  "Relationship building strategies with proven results",
  "Technical knowledge simplified for practical application"
]

const applications = [
  {
    icon: "🚗",
    title: "Vehicle Dealership Transformation",
    description: "Transform a traditional car lot into a modern mobility solutions center",
    examples: [
      "Electric vehicle specialization programs",
      "Autonomous vehicle preparation strategies", 
      "Digital customer experience platforms",
      "Maintenance and service optimization"
    ]
  },
  {
    icon: "🏭",
    title: "Manufacturing Venture Setup",
    description: "Establish automotive component or vehicle manufacturing operations",
    examples: [
      "Supply chain development strategies",
      "Quality control system implementation",
      "Technology integration planning",
      "International market penetration"
    ]
  },
  {
    icon: "🌐",
    title: "Global Network Building",
    description: "Create international partnerships and distribution networks",
    examples: [
      "Government relationship development",
      "International trade agreements",
      "Technology transfer partnerships",
      "Cross-border investment strategies"
    ]
  }
]
</script>
