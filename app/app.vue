<template>
  <main class="min-h-screen bg-white text-gray-900 font-sans">
    <HeroSection
      coverSrc="/Book_cover.jpg"
      title="The Future of Mobility"
      subtitle="A visionary book on Land, Air, Sea, Space & AI. Preorder now for ₦15,000."
      @payWithPaystack="payWithPaystack"
    />
    <ValueProp />
    <FeaturesSection />
    <TestimonialsSection />
    <section class="py-8 flex flex-col items-center">
      <button @click="payWithPaystack" class="px-8 py-3 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-800 transition mb-4">Preorder for ₦15,000</button>
      <EmailCapture />
    </section>
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import ValueProp from './components/ValueProp.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import EmailCapture from './components/EmailCapture.vue'
import FooterSection from './components/FooterSection.vue'

function payWithPaystack() {
  if (typeof window === 'undefined') return
  // Paystack inline script must be loaded in <head> or dynamically
  // Replace with your Paystack public key
  const handler = (window as any).PaystackPop && (window as any).PaystackPop.setup({
    key: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxx', // TODO: Replace with real key
    email: 'customer@email.com', // TODO: Replace with real email
    amount: 1500000, // kobo
    currency: 'NGN',
    ref: String(Date.now()),
    callback: function(response: any) {
      alert('Payment complete! Reference: ' + response.reference)
    },
    onClose: function() {
      alert('Payment window closed.')
    }
  })
  if (handler) handler.openIframe()
  else alert('Paystack script not loaded.')
}
</script>

<style>
/* @import "./assets/tailwind.css"; */
</style>
