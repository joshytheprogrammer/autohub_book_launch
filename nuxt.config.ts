// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  runtimeConfig: {
    public: {
      paystackPublicKey: process.env.NUXT_PUBLIC_PAYSTACK_PUBLIC_KEY || 'pk_test_ad760fa83f741d21c2fa45eb704a6ceba29cbbd9'
    }
  },
  
  app: {
    head: {
      title: 'Modern Automobile CEO - Preorder Now',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'The definitive guide to leadership in the evolving automotive industry. From Land Vehicles to Maritime, Aviation, Space Exploration, and AI integration.' },
        { name: 'keywords', content: 'automobile, CEO, leadership, automotive industry, mobility, AI, space exploration, maritime, aviation' },
        { property: 'og:title', content: 'Modern Automobile CEO by Chika Joel' },
        { property: 'og:description', content: 'The definitive guide to leadership in the evolving automotive industry.' },
        { property: 'og:image', content: '/Book_cover.png' },
        { property: 'og:type', content: 'book' }
      ],
      script: [
        {
          src: 'https://js.paystack.co/v1/inline.js',
          defer: true
        }
      ]
    }
  },
})