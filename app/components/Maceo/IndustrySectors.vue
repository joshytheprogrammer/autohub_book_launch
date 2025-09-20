<template>
  <section class="py-16 lg:py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Industry Sectors & Future Opportunities
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the vast landscape of automotive sectors and emerging technologies that will shape the future
          </p>
        </div>

        <!-- Main Sectors -->
        <div class="grid lg:grid-cols-2 gap-12 mb-16">
          <div 
            v-for="sector in mainSectors" 
            :key="sector.name"
            class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
          >
            <div class="flex items-start gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-green-900 text-white rounded-2xl flex items-center justify-center text-3xl group-hover:bg-green-700 transition-colors">
                  {{ sector.icon }}
                </div>
              </div>
              
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-900 transition-colors">
                  {{ sector.name }}
                </h3>
                <p class="text-gray-600 leading-relaxed mb-6">
                  {{ sector.description }}
                </p>
                
                <div class="space-y-3">
                  <h4 class="font-semibold text-gray-900">Key Opportunities:</h4>
                  <ul class="space-y-2">
                    <li v-for="opportunity in sector.opportunities" :key="opportunity" class="flex items-center gap-3">
                      <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-gray-700">{{ opportunity }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Emerging Technologies -->
        <div class="mb-16">
          <h3 class="text-3xl font-bold text-gray-900 text-center mb-12">
            Emerging Technologies & Innovation Areas
          </h3>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="tech in emergingTechnologies" 
              :key="tech.name"
              class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 cursor-pointer group"
            >
              <div class="text-3xl mb-4">{{ tech.icon }}</div>
              <h4 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700">{{ tech.name }}</h4>
              <p class="text-gray-600 text-sm">{{ tech.description }}</p>
            </div>
          </div>
        </div>

        <!-- Business Diversification -->
        <div class="bg-gradient-to-r from-gray-900 to-green-900 rounded-2xl p-8 lg:p-12 text-white">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-3xl font-bold mb-6">Business Diversification Opportunities</h3>
              <p class="text-green-100 text-lg leading-relaxed mb-8">
                The automotive industry extends far beyond traditional vehicle sales. Learn how to identify and capitalize on multiple revenue streams across interconnected sectors.
              </p>
              
              <div class="space-y-4">
                <div v-for="diversification in diversificationAreas" :key="diversification.category" class="bg-white/10 p-4 rounded-xl">
                  <h4 class="font-bold text-green-200 mb-2">{{ diversification.category }}</h4>
                  <p class="text-green-100 text-sm">{{ diversification.example }}</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <h4 class="text-xl font-bold mb-4">Industry Growth Projection</h4>
                <div class="text-4xl font-bold text-green-300 mb-2">500%</div>
                <p class="text-green-100 text-sm">Expected growth in automotive AI and space sectors by 2030</p>
              </div>
              
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <h4 class="text-xl font-bold mb-4">Market Opportunity</h4>
                <div class="text-4xl font-bold text-green-300 mb-2">$2T+</div>
                <p class="text-green-100 text-sm">Global automotive technology market size</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Future Vision -->
        <div class="mt-16 text-center">
          <h3 class="text-3xl font-bold text-gray-900 mb-8">Your Future as a Modern Automotive CEO</h3>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="p-6">
              <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                🌟
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-3">Industry Leader</h4>
              <p class="text-gray-600">
                Position yourself as a thought leader driving innovation across multiple automotive sectors
              </p>
            </div>
            
            <div class="p-6">
              <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                🚀
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-3">Innovation Pioneer</h4>
              <p class="text-gray-600">
                Lead breakthrough technologies in AI, space exploration, and sustainable transportation
              </p>
            </div>
            
            <div class="p-6">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                🌍
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-3">Global Impact</h4>
              <p class="text-gray-600">
                Build a conglomerate that transforms transportation and mobility worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const mainSectors = [
  {
    name: "Land Vehicles & Electric Mobility",
    icon: "🚗",
    description: "Traditional and electric vehicle manufacturing, autonomous systems, and smart transportation solutions.",
    opportunities: [
      "Electric vehicle manufacturing and charging infrastructure",
      "Autonomous vehicle development and testing",
      "Smart traffic management systems",
      "Vehicle sharing and mobility-as-a-service platforms"
    ]
  },
  {
    name: "Aviation & Aerospace",
    icon: "✈️",
    description: "Aircraft manufacturing, drone technology, and aviation services spanning commercial and space applications.",
    opportunities: [
      "Commercial aircraft design and manufacturing",
      "Drone delivery and surveillance systems",
      "Urban air mobility solutions",
      "Aerospace component manufacturing"
    ]
  },
  {
    name: "Maritime & Marine Technology",
    icon: "🚢",
    description: "Shipping, marine vessel manufacturing, and ocean-based transportation solutions.",
    opportunities: [
      "Autonomous shipping and navigation systems",
      "Marine renewable energy solutions",
      "Smart port and logistics management",
      "Underwater exploration vehicles"
    ]
  },
  {
    name: "Space Exploration & Technology",
    icon: "🚀",
    description: "Space vehicle manufacturing, satellite technology, and interstellar exploration systems.",
    opportunities: [
      "Satellite manufacturing and deployment",
      "Space tourism vehicle development",
      "Interplanetary transportation systems",
      "Space communication technologies"
    ]
  }
]

const emergingTechnologies = [
  { name: "Artificial Intelligence", icon: "🤖", description: "AI-powered autonomous systems and decision-making algorithms" },
  { name: "Carbon Capture Technology", icon: "🌱", description: "Environmental solutions for sustainable transportation" },
  { name: "Solid-State Batteries", icon: "🔋", description: "Next-generation energy storage for electric vehicles" },
  { name: "Augmented Reality", icon: "🥽", description: "AR systems for vehicle maintenance and navigation" },
  { name: "Telematics & IoT", icon: "📡", description: "Connected vehicle systems and data analytics" },
  { name: "Smart Road Construction", icon: "🛣️", description: "Intelligent infrastructure for autonomous vehicles" },
  { name: "Airless Tires", icon: "⭕", description: "Revolutionary tire technology for all vehicle types" },
  { name: "Vehicle Security", icon: "🔒", description: "Cybersecurity solutions for connected vehicles" },
  { name: "3D Manufacturing", icon: "🏭", description: "Advanced manufacturing techniques for automotive parts" }
]

const diversificationAreas = [
  {
    category: "Education & Training",
    example: "Automotive academies, artisan licensing, and professional certification programs"
  },
  {
    category: "Digital Services",
    example: "Vehicle tracking, online services, telematics, and digital marketplace platforms"
  },
  {
    category: "Manufacturing Support",
    example: "Component manufacturing, lubricants, specialized tools, and production equipment"
  },
  {
    category: "Infrastructure Development",
    example: "Smart roads, charging stations, maintenance facilities, and logistics centers"
  }
]
</script>
