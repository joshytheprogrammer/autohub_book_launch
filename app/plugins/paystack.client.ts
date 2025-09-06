// Add Paystack script to head
export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    if (!document.getElementById('paystack-script')) {
      const script = document.createElement('script')
      script.id = 'paystack-script'
      script.src = 'https://js.paystack.co/v1/inline.js'
      script.async = true
      document.head.appendChild(script)
    }
  }
})
