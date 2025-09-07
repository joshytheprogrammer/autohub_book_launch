<template>
  <main class="min-h-screen text-gray-900 font-sans">
    <HeroSection
      :cover-src="bookData.coverSrc"
      :title="bookData.title"
      :subtitle="bookData.subtitle"
      :author="bookData.author"
      :price="bookData.price"
      @preorder="openPaymentModal"
    />
    <FeaturesSection :features="bookData.features" />
    <TestimonialsSection :testimonials="bookData.testimonials" />
    <ValueProp :price="bookData.price" @preorder="openPaymentModal" />
    <EmailCapture @email-captured="handleEmailCapture" />
    <FooterSection :author="bookData.author" />
    
    <!-- Payment Modal -->
    <PaymentModal
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
    <PaymentSuccess
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
import { usePayment } from '~/composables/usePayment'

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
const paystackConfig = {
  publicKey: 'pk_test_10601adfe19c482cb28b4196739401bc7846e838' // Replace with your actual public key
}

const bookData = {
  coverSrc: '/Book_cover.jpg',
  title: 'Modern Automobile CEO',
  subtitle: 'The definitive guide to leadership in the evolving automotive industry. From Land Vehicles to Maritime, Aviation, Space Exploration, and AI integration.',
  author: 'Chika Joel (J-ib)',
  price: '₦50,000',
  features: [
    {
      icon: '🚗',
      title: 'Land Vehicle Innovation',
      description: 'Master the future of terrestrial transportation and autonomous vehicle leadership'
    },
    {
      icon: '⚓',
      title: 'Maritime Leadership',
      description: 'Navigate the complexities of modern shipping and marine technology'
    },
    {
      icon: '✈️',
      title: 'Aviation Excellence',
      description: 'Soar above competition with cutting-edge aerospace management strategies'
    },
    {
      icon: '🚀',
      title: 'Space Exploration',
      description: 'Pioneer the next frontier of human mobility and space commerce'
    },
    {
      icon: '🤖',
      title: 'AI Integration',
      description: 'Harness artificial intelligence to revolutionize mobility solutions'
    }
  ],
  testimonials: [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Automotive Industry Analyst',
      content: 'An essential read for anyone looking to understand the future of mobility. Chika Joel provides invaluable insights into industry transformation.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, TechMobility Inc.',
      content: 'This book bridges the gap between traditional automotive thinking and the revolutionary changes coming to our industry.',
      rating: 5
    },
    {
      name: 'Prof. Elena Rodriguez',
      role: 'Transportation Technology Expert',
      content: 'A comprehensive guide that covers everything from current challenges to future opportunities in the mobility sector.',
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
