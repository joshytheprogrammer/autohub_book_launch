import { ref } from 'vue'

export const usePayment = () => {
  const isPaymentModalOpen = ref(false)
  const isSuccessModalOpen = ref(false)
  const paymentData = ref({})
  const errorMessage = ref('')

  const openPaymentModal = () => {
    isPaymentModalOpen.value = true
    errorMessage.value = ''
  }

  const closePaymentModal = () => {
    isPaymentModalOpen.value = false
  }

  const handlePaymentSuccess = (data) => {
    paymentData.value = data
    isPaymentModalOpen.value = false
    isSuccessModalOpen.value = true
    
    // Log payment for analytics/tracking
    console.log('Payment successful:', data)
    
    // You can add additional logic here like:
    // - Send payment data to your backend
    // - Track conversion events
    // - Update user state
    
    // Example: Send to backend
    // sendPaymentToBackend(data)
  }

  const handlePaymentError = (error) => {
    errorMessage.value = error
    console.error('Payment error:', error)
  }

  const closeSuccessModal = () => {
    isSuccessModalOpen.value = false
    paymentData.value = {}
  }

  // Function to send payment data to backend (placeholder)
  const sendPaymentToBackend = async (data) => {
    try {
      // Replace with your actual backend endpoint
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      
      if (!response.ok) {
        throw new Error('Failed to save payment data')
      }
      
      const result = await response.json()
      console.log('Payment saved to backend:', result)
    } catch (error) {
      console.error('Error saving payment to backend:', error)
    }
  }

  return {
    isPaymentModalOpen,
    isSuccessModalOpen,
    paymentData,
    errorMessage,
    openPaymentModal,
    closePaymentModal,
    handlePaymentSuccess,
    handlePaymentError,
    closeSuccessModal,
    sendPaymentToBackend
  }
}
