// EmailCapture.vue
<template>
  <form class="flex flex-col sm:flex-row items-center justify-center gap-2 mt-8" @submit.prevent="onSubmit">
    <input v-model="email" type="email" required placeholder="Your email for updates" class="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring w-64" />
    <button type="submit" class="px-6 py-2 bg-black text-white rounded font-semibold hover:bg-gray-800 transition">Notify Me</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const email = ref('')
function onSubmit() {
  // Replace with actual email capture logic (API, etc.)
  // eslint-disable-next-line no-alert
  alert(`Thank you! We'll keep you updated: ${email.value}`)
  email.value = ''
}
</script>
