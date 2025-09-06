<template>
  <main class="min-h-screen text-gray-900 font-sans">
    <HeroSection
      :cover-src="bookData.coverSrc"
      :title="bookData.title"
      :subtitle="bookData.subtitle"
      :author="bookData.author"
      :price="bookData.price"
      @preorder="handlePreorder"
    />
    <FeaturesSection :features="bookData.features" />
    <TestimonialsSection :testimonials="bookData.testimonials" />
    <ValueProp />
    <EmailCapture @email-captured="handleEmailCapture" />
    <FooterSection :author="bookData.author" />
  </main>
</template>

<script setup>
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

function handlePreorder() {
  payWithPaystack()
}

function handleEmailCapture(email) {
  console.log('Email captured:', email)
  // Add your email capture logic here
}

function payWithPaystack() {
  if (typeof window === 'undefined') return
  
  const handler = window.PaystackPop && window.PaystackPop.setup({
    key: 'pk_test_10601adfe19c482cb28b4196739401bc7846e838', // TODO: Replace with real key
    email: 'customer@email.com', // TODO: Replace with real email
    amount: 1500000, // kobo (₦15,000)
    currency: 'NGN',
    ref: `MACEO_${Date.now()}`,
    callback: function(response) {
      alert('Payment successful! Reference: ' + response.reference)
    },
    onClose: function() {
      console.log('Payment window closed.')
    }
  })
  
  if (handler) {
    handler.openIframe()
  } else {
    alert('Payment system temporarily unavailable. Please try again later.')
  }
}
</script>

<style>
/*  */
</style>
