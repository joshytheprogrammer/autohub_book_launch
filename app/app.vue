<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// Add global focus outline styles and keyboard navigation enhancements
const handleGlobalKeydown = (event) => {
  // Toggle keyboard navigation mode
  if (event.key === 'Tab') {
    document.body.classList.add('keyboard-navigation-active');
  }
};

const handleMouseDown = () => {
  // Disable keyboard navigation mode on mouse use
  document.body.classList.remove('keyboard-navigation-active');
};

// Add event listeners when component is mounted
onMounted(() => {
  document.addEventListener('keydown', handleGlobalKeydown);
  document.addEventListener('mousedown', handleMouseDown);
});

// Remove event listeners when component is unmounted
onUnmounted(() => {
  document.removeEventListener('keydown', handleGlobalKeydown);
  document.removeEventListener('mousedown', handleMouseDown);
});
</script>

<style>
@import "./assets/tailwind.css";

/* Additional global styles based on design system */
html {
  scroll-behavior: smooth;
}

body {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-feature-settings: "liga" 1, "kern" 1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111827; /* gray-900 - Primary text */
  line-height: 1.5;
}

/* Typography Scale */
h1, .h1 {
  font-size: 1.875rem; /* text-3xl - 30px */
  font-weight: 700; /* font-bold */
  line-height: 1.2;
}

h2, .h2 {
  font-size: 1.5rem; /* text-2xl - 24px */
  font-weight: 700; /* font-bold */
  line-height: 1.25;
}

h3, .h3 {
  font-size: 1.25rem; /* text-xl - 20px */
  font-weight: 600; /* font-semibold */
  line-height: 1.3;
}

h4, .h4 {
  font-size: 1.125rem; /* text-lg - 18px */
  font-weight: 600; /* font-semibold */
  line-height: 1.4;
}

@media (min-width: 768px) {
  h1, .h1 { font-size: 2.25rem; }
  h2, .h2 { font-size: 1.875rem; }
  h3, .h3 { font-size: 1.5rem; }
}

/* Focus Ring Styles for Accessibility */
.focus-ring:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.5);
}
</style>