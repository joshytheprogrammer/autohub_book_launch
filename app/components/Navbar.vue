<template>
  <nav class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <div>
            <span class="text-xl font-bold text-gray-900">AutoHub</span>
            <span class="text-sm text-gray-500 block">Books</span>
          </div>
        </NuxtLink>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            :class="{ 'text-blue-600': $route.path === '/' }"
          >
            Books
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            :class="{ 'text-blue-600': $route.path === '/about' }"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            :class="{ 'text-blue-600': $route.path === '/contact' }"
          >
            Contact
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-200 py-4">
        <div class="flex flex-col space-y-4">
          <NuxtLink 
            to="/" 
            @click="isMobileMenuOpen = false"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            :class="{ 'text-blue-600': $route.path === '/' }"
          >
            Books
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            @click="isMobileMenuOpen = false"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            :class="{ 'text-blue-600': $route.path === '/about' }"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            @click="isMobileMenuOpen = false"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            :class="{ 'text-blue-600': $route.path === '/contact' }"
          >
            Contact
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>
