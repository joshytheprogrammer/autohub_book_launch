<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-green-dark to-emerald-accent text-white py-16 lg:py-24">
      <div class="container mx-auto px-6 text-center max-w-6xl">
        <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          AutoHub Books
        </h1>
        <p class="text-xl lg:text-2xl text-green-light mb-8 max-w-3xl mx-auto">
          Discover cutting-edge insights from industry leaders. 
          Transform your understanding of mobility, technology, and innovation.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div class="flex items-center gap-2 text-green-light bg-green-dark bg-opacity-40 py-2 px-4 rounded-xl">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span>{{ books.length }} Book{{ books.length !== 1 ? 's' : '' }} Available</span>
          </div>
          <div class="flex items-center gap-2 text-green-light bg-green-dark bg-opacity-40 py-2 px-4 rounded-xl">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
            </svg>
            <span>Digital & Physical Copies</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Books Section -->
    <section class="py-16 lg:py-24">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Our Collection
          </h2>
          <div class="h-1 w-20 bg-green-primary mx-auto mb-6 rounded-full"></div>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Expertly crafted books that bridge the gap between traditional industries and cutting-edge innovation.
          </p>
        </div>

        <!-- Books Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <BookCard
            v-for="book in books"
            :key="book.id"
            :book="book"
            @click="navigateToBook(book.slug)"
          />
        </div>
        
        <!-- No books message -->
        <div v-if="books.length === 0" class="text-center py-16">
          <div class="bg-gray-100 rounded-2xl py-12 px-6 max-w-lg mx-auto">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <h3 class="text-xl font-semibold text-gray-700 mb-2">No books available yet</h3>
            <p class="text-gray-600">More titles coming soon. Check back later for our latest releases.</p>
          </div>
        </div>
      </div>
    </section>

        <!-- Coming Soon -->
        <!-- <div class="mt-16 text-center">
          <div class="bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl p-8 max-w-md mx-auto">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">More Books Coming Soon</h3>
            <p class="text-gray-600 mb-4">We're working on expanding our collection with more industry-leading insights.</p>
            <button class="text-green-900 hover:text-green-700 font-medium">
              Get notified →
            </button>
          </div>
        </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

// SEO
useHead({
  title: 'AutoHub Books - Industry-Leading Insights',
  meta: [
    { name: 'description', content: 'Discover cutting-edge books from industry leaders. Transform your understanding of mobility, technology, and innovation.' },
    { name: 'keywords', content: 'books, automotive, mobility, technology, innovation, leadership, business' },
    { property: 'og:title', content: 'AutoHub Books - Industry-Leading Insights' },
    { property: 'og:description', content: 'Discover cutting-edge books from industry leaders.' }
  ]
})

const books = ref([
  {
    id: 1,
    slug: 'maceo',
    title: 'Modern Automotive CEO',
    author: 'Chika Joel (J-ib)',
    price: '₦50,000',
    cover: '/bookcovers/1758548610.png',
    description: 'The definitive guide to leadership in the evolving automotive industry. From Land Vehicles to Maritime, Aviation, Space Exploration, and AI integration.',
    categories: ['Leadership', 'Automotive', 'Technology', 'Innovation'],
    status: 'preorder', // preorder, available, coming-soon
    releaseDate: '2025-12-01',
    rating: 5.0,
    features: [
      'Comprehensive industry analysis',
      '5 domain coverage (Land, Maritime, Aviation, Space, AI)',
      'Real-world case studies',
      'Strategic frameworks',
      'Future trend predictions'
    ]
  }
  // Add more books here as they become available
])

function navigateToBook(slug) {
  navigateTo(`/${slug}`)
}
</script>