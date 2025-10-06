<template>
  <nav class="bg-gray-50 shadow-sm border-b border-gray-200 sticky top-0 z-40">
    <div class="container mx-auto px-4 sm:px-6 max-w-6xl">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <a href="https://autohub.africa" class="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-green-primary rounded-lg">
          <img src="https://autohub.africa/logo.png" alt="AutoHub" class="h-8">
          <span class="sr-only">AutoHub Home</span>
        </a>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main Navigation">
          <NuxtLink 
            to="/" 
            class="text-gray-600 hover:text-green-primary font-medium transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-green-primary rounded-lg px-3 py-2"
            :class="{ 'text-green-dark font-semibold': $route.path === '/' }"
          >
            Books
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-600 hover:text-green-primary font-medium transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-green-primary rounded-lg px-3 py-2"
            :class="{ 'text-green-dark font-semibold': $route.path === '/about' }"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-gray-600 hover:text-green-primary font-medium transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-green-primary rounded-lg px-3 py-2"
            :class="{ 'text-green-dark font-semibold': $route.path === '/contact' }"
          >
            Contact
          </NuxtLink>
          <a 
            href="https://autohub.africa" 
            class="text-gray-600 hover:text-green-primary font-medium transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-green-primary rounded-lg px-3 py-2"
            :class="{ 'text-green-dark font-semibold': $route.path === '/contact' }"
          >
            Back to Marketplace
        </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="text-gray-600 hover:text-green-primary focus:outline-none focus:ring-2 focus:ring-green-primary rounded-lg p-2"
            aria-label="Toggle navigation menu"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu"
          >
            <span class="sr-only">{{ isMobileMenuOpen ? 'Close menu' : 'Open menu' }}</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden border-t border-gray-200 py-4"
        id="mobile-menu"
        role="menu"
      >
        <div class="flex flex-col space-y-4">
          <NuxtLink 
            to="/" 
            @click="isMobileMenuOpen = false"
            class="text-gray-600 hover:text-green-primary font-medium transition-colors px-3 py-2 rounded-xl hover:bg-green-light focus:outline-none focus:ring-2 focus:ring-green-primary"
            :class="{ 'text-green-dark font-semibold bg-green-light': $route.path === '/' }"
            role="menuitem"
          >
            Books
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            @click="isMobileMenuOpen = false"
            class="text-gray-600 hover:text-green-primary font-medium transition-colors px-3 py-2 rounded-xl hover:bg-green-light focus:outline-none focus:ring-2 focus:ring-green-primary"
            :class="{ 'text-green-dark font-semibold bg-green-light': $route.path === '/about' }"
            role="menuitem"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            @click="isMobileMenuOpen = false"
            class="text-gray-600 hover:text-green-primary font-medium transition-colors px-3 py-2 rounded-xl hover:bg-green-light focus:outline-none focus:ring-2 focus:ring-green-primary"
            :class="{ 'text-green-dark font-semibold bg-green-light': $route.path === '/contact' }"
            role="menuitem"
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
