// FooterSection.vue
<template>
  <footer class="py-6 text-center text-gray-500 text-sm border-t mt-12">
    <div>&copy; {{ new Date().getFullYear() }} AutoHub Books. All rights reserved.</div>
    <div class="mt-2 flex justify-center gap-4">
      <a href="#" class="hover:text-black transition">Twitter</a>
      <a href="#" class="hover:text-black transition">Instagram</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No props needed
</script>
