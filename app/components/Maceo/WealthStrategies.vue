<template>
  <section class="py-16 lg:py-24 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Wealth Creation & Business Strategies
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the financial systems and wealth accumulation strategies that transform automotive entrepreneurs into industry moguls
          </p>
        </div>

        <!-- Wealth Building Foundation -->
        <div class="grid lg:grid-cols-2 gap-12 mb-16">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
                💰
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Understanding Money & Wealth Systems</h3>
            </div>
            
            <div class="space-y-4">
              <p class="text-gray-600 leading-relaxed">
                Learn the fundamental principles of wealth creation and the systems that accumulate and retain wealth in the automotive industry.
              </p>
              
              <div class="space-y-3">
                <h4 class="font-semibold text-gray-900">Core Money Principles:</h4>
                <ul class="space-y-2">
                  <li v-for="principle in moneyPrinciples" :key="principle" class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-700">{{ principle }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl">
                🏦
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Banking & Financial Systems</h3>
            </div>
            
            <div class="space-y-4">
              <p class="text-gray-600 leading-relaxed">
                Master banking relationships, account management, and financial products that support automotive business growth.
              </p>
              
              <div class="space-y-3">
                <h4 class="font-semibold text-gray-900">Banking Mastery:</h4>
                <ul class="space-y-2">
                  <li v-for="banking in bankingSkills" :key="banking" class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-700">{{ banking }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Funding Strategies -->
        <div class="mb-16">
          <h3 class="text-3xl font-bold text-gray-900 text-center mb-12">
            Multiple Funding Pathways
          </h3>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="strategy in fundingStrategies" 
              :key="strategy.name"
              class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl group-hover:scale-110 transition-transform">
                {{ strategy.icon }}
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {{ strategy.name }}
              </h4>
              <p class="text-gray-600 text-sm leading-relaxed">
                {{ strategy.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Investment & Growth -->
        <div class="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-3xl font-bold mb-6">Investment & Wealth Multiplication</h3>
              <p class="text-blue-100 text-lg leading-relaxed mb-8">
                Learn advanced investment strategies that multiply your automotive business profits and create sustainable wealth streams across multiple sectors.
              </p>
              
              <div class="space-y-4">
                <div v-for="investment in investmentStrategies" :key="investment.type" class="bg-white/10 p-4 rounded-xl">
                  <h4 class="font-bold text-blue-200 mb-2">{{ investment.type }}</h4>
                  <p class="text-blue-100 text-sm">{{ investment.strategy }}</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 class="text-xl font-bold mb-4 text-center">Wealth Growth Timeline</h4>
                <div class="space-y-4">
                  <div class="flex justify-between items-center">
                    <span class="text-blue-200">Year 1-2:</span>
                    <span class="font-bold text-green-300">Foundation Building</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-blue-200">Year 3-5:</span>
                    <span class="font-bold text-yellow-300">Rapid Expansion</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-blue-200">Year 5+:</span>
                    <span class="font-bold text-purple-300">Conglomerate Status</span>
                  </div>
                </div>
              </div>
              
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <h4 class="text-xl font-bold mb-4">Success Multiplier</h4>
                <div class="text-5xl font-bold text-green-300 mb-2">10X</div>
                <p class="text-blue-100 text-sm">Average wealth multiplication for dedicated students</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Business Development Strategies -->
        <div>
          <h3 class="text-3xl font-bold text-gray-900 text-center mb-12">
            Strategic Business Development
          </h3>
          
          <div class="grid lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl p-8 shadow-lg">
              <div class="text-4xl mb-4">📊</div>
              <h4 class="text-xl font-bold text-gray-900 mb-4">Market Analysis & Research</h4>
              <ul class="space-y-2 text-gray-600">
                <li>• Market demand assessment</li>
                <li>• Competitive landscape analysis</li>
                <li>• Industry trend identification</li>
                <li>• Customer behavior studies</li>
                <li>• Pricing strategy optimization</li>
              </ul>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg">
              <div class="text-4xl mb-4">🤝</div>
              <h4 class="text-xl font-bold text-gray-900 mb-4">Strategic Partnerships</h4>
              <ul class="space-y-2 text-gray-600">
                <li>• International business networks</li>
                <li>• Government partnership development</li>
                <li>• Technology collaboration agreements</li>
                <li>• Supply chain optimization</li>
                <li>• Joint venture structures</li>
              </ul>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg">
              <div class="text-4xl mb-4">🚀</div>
              <h4 class="text-xl font-bold text-gray-900 mb-4">Scaling & Expansion</h4>
              <ul class="space-y-2 text-gray-600">
                <li>• Operational efficiency systems</li>
                <li>• Global market penetration</li>
                <li>• Technology infrastructure scaling</li>
                <li>• Team building and management</li>
                <li>• Brand development strategies</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="mt-16 text-center">
          <div class="bg-gradient-to-r from-green-500 to-green-700 rounded-2xl p-8 text-white">
            <h3 class="text-3xl font-bold mb-4">Master the Art of Automotive Wealth Creation</h3>
            <p class="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Transform your financial future with proven strategies used by successful automotive industry leaders
            </p>
            <button 
              @click="$emit('preorder')"
              class="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
            >
              <span>Unlock Wealth Strategies</span>
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

const moneyPrinciples = [
  "Understanding wealth accumulation systems",
  "Money flow dynamics in automotive industry",
  "Asset vs liability management",
  "Compound wealth building strategies",
  "Risk assessment and mitigation"
]

const bankingSkills = [
  "Building strong account statements",
  "Understanding bank products & services",
  "Loan structuring and repayment strategies",
  "International banking relationships",
  "Credit management and optimization"
]

const fundingStrategies = [
  {
    name: "Bootstrapping",
    icon: "🥾",
    description: "Self-funding strategies that maintain full control while building sustainable cash flow"
  },
  {
    name: "Grant Funding",
    icon: "🎁",
    description: "Government and private grants specifically available for automotive innovation projects"
  },
  {
    name: "Investment Capital",
    icon: "💼",
    description: "Attracting angel investors and venture capital for rapid business scaling"
  },
  {
    name: "Strategic Partnerships",
    icon: "🤝",
    description: "Joint ventures and partnerships that provide funding and market access"
  }
]

const investmentStrategies = [
  {
    type: "Sector Diversification",
    strategy: "Spread investments across land, air, sea, and space automotive sectors for risk mitigation"
  },
  {
    type: "Technology Integration",
    strategy: "Invest in AI, IoT, and emerging technologies that enhance automotive operations"
  },
  {
    type: "Global Expansion",
    strategy: "International market penetration through strategic acquisitions and partnerships"
  },
  {
    type: "Vertical Integration",
    strategy: "Control entire supply chain from manufacturing to retail for maximum profit margins"
  }
]
</script>
