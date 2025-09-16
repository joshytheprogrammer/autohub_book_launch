<template>
  <main class="min-h-screen text-gray-900 font-sans">
    <MaceoHeroSection
      :cover-src="bookData.coverSrc"
      :title="bookData.title"
      :subtitle="bookData.subtitle"
      :author="bookData.author"
      :price="bookData.price"
      @preorder="openPaymentModal"
    />
    <MaceoProgramOverview 
      :price="bookData.price" 
      @preorder="openPaymentModal" 
    />
    <MaceoWhyThisMatters 
      :price="bookData.price" 
      @preorder="openPaymentModal" 
    />
    <MaceoTableOfContents />
    <MaceoLearningOutcomes />
    <MaceoIndustrySectors />
    <MaceoWealthStrategies 
      :price="bookData.price" 
      @preorder="openPaymentModal" 
    />
    <MaceoSuccessFramework 
      :price="bookData.price" 
      @preorder="openPaymentModal" 
    />
    <MaceoFeaturesSection :features="bookData.features" />
    <MaceoTestimonialsSection :testimonials="bookData.testimonials" />
    <MaceoAboutAuthor :author="bookData.author" />
    <MaceoValueProp :price="bookData.price" @preorder="openPaymentModal" />
    <MaceoEmailCapture @email-captured="handleEmailCapture" />
    <MaceoFooterSection :author="bookData.author" />
    
    <!-- Payment Modal -->
    <MaceoPaymentModal
      :is-open="isPaymentModalOpen"
      :book-title="bookData.title"
      :author="bookData.author"
      :price="bookData.price"
      :book-cover="bookData.coverSrc"
      :paystack-key="paystackConfig.publicKey"
      @close="closePaymentModal"
      @payment-success="handlePaymentSuccess"
      @payment-error="handlePaymentError"
    />
    
    <!-- Success Modal -->
    <MaceoPaymentSuccess
      :is-visible="isSuccessModalOpen"
      :payment-data="paymentData"
      @close="closeSuccessModal"
    />
    
    <!-- Error Notification -->
    <div v-if="errorMessage" class="fixed bottom-4 right-4 z-50">
      <div class="bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 max-w-sm">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <p class="font-semibold">Payment Error</p>
          <p class="text-sm">{{ errorMessage }}</p>
        </div>
        <button @click="errorMessage = ''" class="text-white hover:text-gray-200">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { usePayment } from '../composables/usePayment'

// Payment system
const {
  isPaymentModalOpen,
  isSuccessModalOpen,
  paymentData,
  errorMessage,
  openPaymentModal,
  closePaymentModal,
  handlePaymentSuccess,
  handlePaymentError,
  closeSuccessModal
} = usePayment()

// Paystack configuration
const runtimeConfig = useRuntimeConfig()
const paystackConfig = {
  publicKey: runtimeConfig.public.paystackPublicKey
}

const bookData = {
  coverSrc: '/Book_cover.png',
  title: 'Modern Automobile CEO',
  subtitle: 'A comprehensive blueprint for what it takes to become a successful automotive CEO, covering land vehicles, maritime, aviation, AI, and space exploration..',
  author: 'Chika Joel (J-ib)',
  price: '₦50,000 ($33)',
  features: [
    {
      icon: '�',
      title: '12 Comprehensive Chapters',
      description: 'Complete transformation journey from beginner to conglomerate builder'
    },
    {
      icon: '🏭',
      title: 'Manufacturing Mastery',
      description: 'Deep dive into automotive manufacturing across all sectors and components'
    },
    {
      icon: '💰',
      title: 'Wealth Creation Systems',
      description: 'Proven financial strategies and investment approaches for automotive success'
    },
    {
      icon: '🤝',
      title: 'Strategic Relationships',
      description: 'Build powerful networks with industry leaders, government, and international partners'
    },
    {
      icon: '🚀',
      title: 'Future Technologies',
      description: 'Master AI, space exploration, electric vehicles, and emerging automotive technologies'
    },
    {
      icon: '🌍',
      title: 'Global Expansion',
      description: 'Scale from local operations to international conglomerate status'
    }
  ],
  testimonials: [
    {
      name: 'Dr. Ngozi Okafor',
      role: 'Automotive Industry Consultant, Abuja',
      content: 'This is the most practical guide to automotive leadership I’ve ever come across. The 12 chapters take you step by step from foundation to building a thriving business empire.',
      rating: 5
    },
    {
      name: 'Tunde Balogun',
      role: 'CEO, Mototek Nigeria Ltd.',
      content: 'This book goes beyond theory — it breaks down the entire automotive ecosystem from local assembly to global opportunities. The wealth creation insights alone are worth the price.',
      rating: 5
    },
    {
      name: 'Prof. Aisha Danladi',
      role: 'Transportation & Innovation Scholar, UNILAG',
      content: 'Chika Joel has written a masterpiece that connects Nigeria’s auto industry with the future of mobility and emerging technologies. A must-read for serious entrepreneurs.',
      rating: 5
    },
    {
      name: 'Ibrahim Oladele',
      role: 'Automotive Entrepreneur, Lagos',
      content: 'The MACEOS program opened my eyes to opportunities I never imagined. From vehicle design to space technology — this book completely reshaped my business outlook.',
      rating: 5
    }
  ]

}

function handleEmailCapture(email) {
  console.log('Email captured:', email)
  // Add your email capture logic here
  // You could also open the payment modal here if desired
}
</script>

<style>
/*  */
</style>
