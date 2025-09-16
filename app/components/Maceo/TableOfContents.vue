<template>
  <section class="py-16 lg:py-24 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What You'll Learn
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive 12-chapter journey that transforms automotive entrepreneurs into modern industry leaders
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <div 
            v-for="(chapter, index) in chapters" 
            :key="index"
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center font-bold text-lg group-hover:bg-blue-700 transition-colors">
                  {{ index + 1 }}
                </div>
              </div>
              
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                  {{ chapter.title }}
                </h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  {{ chapter.description }}
                </p>
                
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="topic in chapter.keyTopics" 
                    :key="topic"
                    class="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                  >
                    {{ topic }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <div class="inline-flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-xl">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span class="font-semibold">12 Comprehensive Chapters</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const chapters = [
  {
    title: "As A Beginner",
    description: "Start your journey as a Modern Automotive CEO with essential foundations, qualifications, and industry entry strategies.",
    keyTopics: ["Industry Entry", "Market Analysis", "Career Planning", "Reality Check"]
  },
  {
    title: "Understanding The Industry",
    description: "Explore the complete scope of the Automotive industry including aviation, maritime, AI, and space exploration sectors.",
    keyTopics: ["Industry Scope", "Market Statistics", "Future Trends", "Space Technology"]
  },
  {
    title: "Automotive Mechanism",
    description: "Master the technical foundations of vehicle engines, transmissions, and all related automotive components.",
    keyTopics: ["Engine Systems", "Transmission", "Suspension", "Electrical Systems"]
  },
  {
    title: "Building A CEO's Character",
    description: "Develop the essential leadership qualities, technical skills, and professional mindset for automotive leadership.",
    keyTopics: ["Leadership Skills", "Database Management", "Integrity", "Professional Growth"]
  },
  {
    title: "Ways To Raise Money",
    description: "Learn comprehensive wealth accumulation strategies, banking systems, and investment approaches for your automotive venture.",
    keyTopics: ["Banking Systems", "Investment Strategy", "Grant Applications", "Wealth Multiplication"]
  },
  {
    title: "Sales And Marketing",
    description: "Master practical sales techniques and marketing strategies specifically designed for the modern automotive industry.",
    keyTopics: ["Market Research", "Sales Platforms", "Digital Marketing", "Customer Acquisition"]
  },
  {
    title: "Starting Operation",
    description: "Navigate the practical phase of launching your automotive business with real-world operational strategies.",
    keyTopics: ["Market Assessment", "Vehicle Inspection", "Business Registration", "Office Setup"]
  },
  {
    title: "Business Relationship",
    description: "Build powerful networks with industry leaders, partners, clients, and stakeholders across the automotive ecosystem.",
    keyTopics: ["Strategic Partnerships", "Client Relations", "Government Relations", "International Networking"]
  },
  {
    title: "Automotive Sector",
    description: "Discover additional automotive sectors and diversification opportunities beyond traditional vehicle sales.",
    keyTopics: ["Sector Diversification", "AI Integration", "Space Technology", "Electric Vehicles"]
  },
  {
    title: "Automotive Manufacturing",
    description: "The core chapter covering comprehensive automotive manufacturing across all sectors including aircraft and AI components.",
    keyTopics: ["Manufacturing Processes", "Quality Control", "Technology Integration", "Safety Management"]
  },
  {
    title: "Building A Conglomerate",
    description: "Scale your success into a global automotive conglomerate with strategic expansion and investment approaches.",
    keyTopics: ["Corporate Structure", "Global Expansion", "Brand Management", "Strategic Investments"]
  },
  {
    title: "The Life Of A Successful CEO",
    description: "The culminating chapter exploring the personal journey, legacy building, and long-term success principles.",
    keyTopics: ["Success Principles", "Legacy Building", "Personal Growth", "Industry Contribution"]
  }
]
</script>
