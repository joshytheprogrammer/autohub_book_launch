<template>
  <main class="min-h-screen text-gray-900 font-sans">
    <MaceoHeroSection
      :cover-src="bookData.coverSrc"
      :title="bookData.title"
      :subtitle="bookData.subtitle"
      :author="bookData.author"
      :price="bookData.price"
      @order-digital="openDigitalModal"
      @order-physical="openOrderModal"
    />
    <MaceoProgramOverview 
      :price="bookData.price" 
      @order-digital="openDigitalModal"
      @order-physical="openOrderModal"
    />
    <MaceoWhyThisMatters 
      :price="bookData.price" 
      @order-digital="openDigitalModal"
      @order-physical="openOrderModal"
    />
    <MaceoTableOfContents />
    <MaceoLearningOutcomes />
    <MaceoIndustrySectors />
    <MaceoWealthStrategies 
      :price="bookData.price" 
      @order-digital="openDigitalModal"
      @order-physical="openOrderModal"
    />
    <MaceoSuccessFramework 
      :price="bookData.price" 
      @order-digital="openDigitalModal"
      @order-physical="openOrderModal"
    />
    <MaceoFeaturesSection :features="bookData.features" />
    <MaceoTestimonialsSection :testimonials="bookData.testimonials" />
    <MaceoAboutAuthor :author="bookData.author" />
    <MaceoValueProp 
      :price="bookData.price" 
      @order-digital="openDigitalModal"
      @order-physical="openOrderModal"
    />
    <MaceoEmailCapture @email-captured="handleEmailCapture" />
    <!-- <MaceoFooterSection :author="bookData.author" /> -->
    
    <!-- Physical Order Modal (Pay on Delivery) -->
    <MaceoOrderModal
      :is-open="isOrderModalOpen"
      :book-title="bookData.title"
      :author="bookData.author"
      :price="bookData.price"
      :book-cover="bookData.coverSrc"
      @close="closeOrderModal"
      @order-success="handleOrderSuccess"
      @order-error="handleError"
    />
    
    <!-- Physical Order Success Modal -->
    <MaceoOrderSuccess
      :is-visible="isOrderSuccessOpen"
      :order-data="orderData"
      @close="closeOrderSuccess"
    />

    <!-- Digital Purchase Modal (Paystack) -->
    <MaceoDigitalPurchaseModal
      :is-open="isDigitalModalOpen"
      :book-title="bookData.title"
      :author="bookData.author"
      :price="bookData.price"
      :book-cover="bookData.coverSrc"
      :paystack-key="paystackConfig.publicKey"
      :product-id="'maceo-digital'"
      :product-price="50000"
      @close="closeDigitalModal"
      @payment-success="handleDigitalPaymentSuccess"
      @payment-error="handleError"
    />

    <!-- Digital Purchase Success Modal -->
    <MaceoDigitalPurchaseSuccess
      :is-visible="isDigitalSuccessOpen"
      :payment-data="digitalPaymentData"
      :download-url="downloadUrl"
      @close="closeDigitalSuccess"
    />
    
    <!-- Error Notification -->
    <div v-if="errorMessage" class="fixed bottom-4 right-4 z-50">
      <div class="bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 max-w-sm">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <p class="font-semibold">Error</p>
          <p class="text-sm">{{ errorMessage }}</p>
        </div>
        <button @click="errorMessage = ''" class="text-white hover:text-gray-200">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Processing Overlay -->
    <div v-if="isProcessingPayment" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div class="bg-white rounded-2xl p-8 text-center max-w-sm">
        <svg class="animate-spin w-12 h-12 text-green-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <h3 class="text-lg font-semibold text-gray-900">Processing Payment...</h3>
        <p class="text-sm text-gray-600 mt-2">Please wait while we verify your payment and generate your download link.</p>
      </div>
    </div>
  </main>
</template>

<script setup>
// Paystack configuration
const runtimeConfig = useRuntimeConfig()
const paystackConfig = {
  publicKey: runtimeConfig.public.paystackPublicKey
}

// Physical Order state management
const isOrderModalOpen = ref(false)
const isOrderSuccessOpen = ref(false)
const orderData = ref({})

// Digital Purchase state management
const isDigitalModalOpen = ref(false)
const isDigitalSuccessOpen = ref(false)
const digitalPaymentData = ref({})
const downloadUrl = ref('')
const isProcessingPayment = ref(false)

// Shared state
const errorMessage = ref('')

// Physical Order modal functions
function openOrderModal() {
  isOrderModalOpen.value = true
}

function closeOrderModal() {
  isOrderModalOpen.value = false
}

function handleOrderSuccess(data) {
  isOrderModalOpen.value = false
  orderData.value = data
  isOrderSuccessOpen.value = true
}

function closeOrderSuccess() {
  isOrderSuccessOpen.value = false
  orderData.value = {}
}

// Digital Purchase modal functions
function openDigitalModal() {
  isDigitalModalOpen.value = true
}

function closeDigitalModal() {
  isDigitalModalOpen.value = false
}

async function handleDigitalPaymentSuccess(data) {
  digitalPaymentData.value = data
  isDigitalModalOpen.value = false
  isProcessingPayment.value = true
  
  try {
    // 1. Verify payment and get download token
    const verifyResponse = await $fetch('/api/verify-payment', {
      method: 'POST',
      body: {
        reference: data.reference,
        productId: data.productId,
        email: data.email,
        customerName: data.name
      }
    })
    
    if (!verifyResponse.body?.success) {
      throw new Error(verifyResponse.body?.error || 'Payment verification failed')
    }
    
    downloadUrl.value = verifyResponse.body.downloadUrl
    
    // 2. Send download email
    await $fetch('/api/send-download-email', {
      method: 'POST',
      body: {
        email: data.email,
        customerName: data.name,
        productId: data.productId,
        downloadUrl: verifyResponse.body.downloadUrl,
        reference: data.reference
      }
    })
    
    // Show success modal
    isDigitalSuccessOpen.value = true
    
  } catch (error) {
    console.error('Error processing payment:', error)
    handleError('Payment received but there was an issue generating your download link. Please contact support with your reference number: ' + data.reference)
  } finally {
    isProcessingPayment.value = false
  }
}

function closeDigitalSuccess() {
  isDigitalSuccessOpen.value = false
  digitalPaymentData.value = {}
  downloadUrl.value = ''
}

// Shared error handler
function handleError(error) {
  errorMessage.value = error
  setTimeout(() => {
    errorMessage.value = ''
  }, 8000)
}

const bookData = {
  coverSrc: '/bookcovers/mock-00054.png',
  title: 'Modern Automotive CEO',
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
      name: 'Emeka Nwosu',
      role: 'Automotive Engineer, Enugu',
      content: 'This book is a game changer for anyone serious about the automotive industry in Nigeria. The practical insights and strategies are unmatched.',
      rating: 5
    },
    {
      name: 'Fatima Bello',
      role: 'Mobility Startup Founder, Kano',
      content: 'Modern Automotive CEO gave me the confidence to scale my business and explore new technologies. Highly recommended for entrepreneurs.',
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
