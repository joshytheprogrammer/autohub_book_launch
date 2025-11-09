<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-green-900 to-green-800 text-white py-16 lg:py-24">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold mb-6">
          Get in Touch
        </h1>
        <p class="text-xl lg:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
          Have questions about our books? Want to collaborate? We'd love to hear from you.
        </p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16 lg:py-24">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      v-model="form.firstName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Your first name"
                    >
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      v-model="form.lastName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Your last name"
                    >
                  </div>
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="your.email@example.com"
                  >
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="book-question">Book Question</option>
                    <option value="collaboration">Collaboration Opportunity</option>
                    <option value="author-inquiry">Author Inquiry</option>
                    <option value="media">Media & Press</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="6"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <div class="flex items-start gap-3">
                  <input
                    id="newsletter"
                    v-model="form.newsletter"
                    type="checkbox"
                    class="mt-1 w-4 h-4 text-green-900 border-gray-300 rounded focus:ring-green-500"
                  >
                  <label for="newsletter" class="text-sm text-gray-600">
                    I'd like to receive updates about new books and industry insights from AutoHub Books.
                  </label>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-green-900 hover:bg-green-700 disabled:bg-green-400 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg v-if="isSubmitting" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                </button>
              </form>

              <!-- Success Message -->
              <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <p class="font-medium text-green-800">Message sent successfully!</p>
                    <p class="text-sm text-green-600">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>

              <!-- Error Message -->
              <div v-if="showError" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <p class="font-medium text-red-800">Failed to send message</p>
                    <p class="text-sm text-red-600">{{ errorMessage }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Information -->
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div class="space-y-6">
                <div class="bg-gray-50 rounded-xl p-6">
                  <h3 class="font-semibold text-gray-900 mb-4">General Inquiries</h3>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <svg class="w-5 h-5 text-green-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <span class="text-gray-700">info@autohub.africa</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <svg class="w-5 h-5 text-green-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span class="text-gray-700">Response within 24 hours</span>
                    </div>
                  </div>
                </div>

                <div class="bg-green-50 rounded-xl p-6">
                  <h3 class="font-semibold text-gray-900 mb-4">Author Collaborations</h3>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <svg class="w-5 h-5 text-green-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <span class="text-gray-700">chikajoel@autohub.africa</span>
                    </div>
                    <p class="text-sm text-gray-600 ml-8">
                      Interested in publishing with us? We're always looking for industry experts with compelling insights to share.
                    </p>
                  </div>
                </div>

                <div class="bg-indigo-50 rounded-xl p-6">
                  <h3 class="font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div class="flex space-x-4">
                    <a href="https://www.instagram.com/lovej_ib" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-green-900 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors" aria-label="Follow us on Instagram">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/J-ib" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-green-900 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors" aria-label="Follow us on Facebook">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com/lovej_ib" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-green-900 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors" aria-label="Follow us on X (Twitter)">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="https://www.tiktok.com/@lovej_ib" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-green-900 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors" aria-label="Follow us on TikTok">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/J-ib" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-green-900 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors" aria-label="Follow us on LinkedIn">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// SEO
useHead({
  title: 'Contact AutoHub Books - Get in Touch',
  meta: [
    { name: 'description', content: 'Contact AutoHub Books for inquiries about our publications, author collaborations, or general questions. We respond within 24 hours.' },
    { name: 'keywords', content: 'contact autohub books, inquiries, author collaboration, support, get in touch' },
    { property: 'og:title', content: 'Contact AutoHub Books - Get in Touch' },
    { property: 'og:description', content: 'Contact us for inquiries about our publications and collaboration opportunities.' }
  ]
})

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
  newsletter: false
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const errorMessage = ref('')

async function submitForm() {
  isSubmitting.value = true
  showError.value = false
  
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
        newsletter: form.value.newsletter
      }
    })
    
    // Reset form on success
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      newsletter: false
    }
    
    showSuccess.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Form submission error:', error)
    showError.value = true
    errorMessage.value = error.data?.error || 'Failed to send message. Please try again.'
    
    // Hide error message after 5 seconds
    setTimeout(() => {
      showError.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>
