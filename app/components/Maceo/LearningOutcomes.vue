<template>
  <section class="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-green-900 text-white">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">
            Practical Skills You'll Master
          </h2>
          <p class="text-xl text-green-100 max-w-3xl mx-auto">
            From foundational knowledge to advanced implementation strategies across all automotive sectors
          </p>
        </div>

        <!-- Skills Categories -->
        <div class="space-y-12">
          <!-- Business Foundation -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-2xl">
                🏗️
              </div>
              <h3 class="text-2xl font-bold">Business Foundation & Character Building</h3>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="skill in businessFoundation" :key="skill" class="bg-white/5 p-4 rounded-xl">
                <span class="text-green-200">{{ skill }}</span>
              </div>
            </div>
          </div>

          <!-- Technical Expertise -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-2xl">
                ⚙️
              </div>
              <h3 class="text-2xl font-bold">Technical Expertise & Manufacturing</h3>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="skill in technicalExpertise" :key="skill" class="bg-white/5 p-4 rounded-xl">
                <span class="text-green-200">{{ skill }}</span>
              </div>
            </div>
          </div>

          <!-- Financial Mastery -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-2xl">
                💰
              </div>
              <h3 class="text-2xl font-bold">Financial Mastery & Investment</h3>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="skill in financialMastery" :key="skill" class="bg-white/5 p-4 rounded-xl">
                <span class="text-yellow-200">{{ skill }}</span>
              </div>
            </div>
          </div>

          <!-- Market Strategy -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-2xl">
                📈
              </div>
              <h3 class="text-2xl font-bold">Market Strategy & Relationship Building</h3>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="skill in marketStrategy" :key="skill" class="bg-white/5 p-4 rounded-xl">
                <span class="text-green-200">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Transformation Timeline -->
        <div class="mt-16">
          <h3 class="text-3xl font-bold text-center mb-12">Your Transformation Journey</h3>
          
          <div class="grid md:grid-cols-4 gap-8">
            <div v-for="(phase, index) in transformationPhases" :key="index" class="text-center">
              <div class="relative mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-900 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  {{ index + 1 }}
                </div>
                <div v-if="index < transformationPhases.length - 1" class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-400/30"></div>
              </div>
              <h4 class="text-xl font-bold mb-3">{{ phase.title }}</h4>
              <p class="text-green-100 text-sm">{{ phase.description }}</p>
            </div>
          </div>
        </div>

        <!-- Success Metrics -->
        <div class="mt-16 bg-gradient-to-r from-green-500/20 to-green-500/20 rounded-2xl p-8 text-center">
          <h3 class="text-2xl font-bold mb-6">Success Outcomes</h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div>
              <div class="text-3xl font-bold text-green-300 mb-2">360°</div>
              <div class="text-green-100">Complete Industry Understanding</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-green-300 mb-2">12</div>
              <div class="text-green-100">Comprehensive Business Sectors</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-green-300 mb-2">∞</div>
              <div class="text-green-100">Unlimited Growth Potential</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const businessFoundation = [
  "Market Research & Analysis",
  "Business Plan Development", 
  "Professional Character Building",
  "Leadership & Management",
  "Database Creation & Utilization",
  "Integrity & Ethics",
  "Self-Discovery & Growth",
  "Decision Making Skills",
  "Professional Appearance",
  "Communication Excellence"
]

const technicalExpertise = [
  "Engine & Transmission Systems",
  "Vehicle Inspection Protocols",
  "Diagnostic Equipment Usage",
  "Manufacturing Processes",
  "Quality Control Systems",
  "Safety Management",
  "AI Integration Techniques",
  "Space Technology Basics",
  "Electric Vehicle Technology",
  "Autonomous Systems",
  "Programming & Coding",
  "Telematics & IoT"
]

const financialMastery = [
  "Banking & Financial Systems",
  "Investment Strategies",
  "Wealth Accumulation Methods",
  "Grant Application Processes",
  "Business Financing Options",
  "International Banking",
  "Digital Currency Understanding",
  "Risk Management",
  "Profit Optimization",
  "Wealth Multiplication",
  "Bootstrapping Techniques",
  "ROI Maximization"
]

const marketStrategy = [
  "Sales Platform Development",
  "Digital Marketing Mastery",
  "Customer Relationship Management",
  "Networking Strategies",
  "Partnership Development",
  "Government Relations",
  "International Business",
  "Brand Management",
  "Product Cataloging",
  "Market Penetration",
  "Competitive Analysis",
  "Global Expansion"
]

const transformationPhases = [
  {
    title: "Foundation",
    description: "Build core knowledge and character as an automotive professional"
  },
  {
    title: "Implementation", 
    description: "Apply practical skills in real-world automotive operations"
  },
  {
    title: "Expansion",
    description: "Scale operations and build strategic partnerships"
  },
  {
    title: "Conglomerate",
    description: "Establish a global automotive business empire"
  }
]
</script>
