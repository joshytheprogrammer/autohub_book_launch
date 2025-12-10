import { ref } from 'vue'

export const useStorefrontPayment = () => {
  const isCheckoutOpen = ref(false)
  const isSuccessModalOpen = ref(false)
  const selectedProduct = ref(null)
  const paymentData = ref({})
  const downloadUrl = ref('')
  const isProcessingPayment = ref(false)
  
  // Notification state
  const notification = ref({
    show: false,
    type: 'info',
    title: '',
    message: ''
  })

  const openCheckout = (product) => {
    selectedProduct.value = product
    isCheckoutOpen.value = true
    hideNotification()
  }

  const closeCheckout = () => {
    isCheckoutOpen.value = false
    selectedProduct.value = null
  }

  const showNotification = (type, message, title = '') => {
    notification.value = {
      show: true,
      type,
      title,
      message
    }
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      hideNotification()
    }, 5000)
  }

  const hideNotification = () => {
    notification.value.show = false
  }

  const handlePaymentSuccess = async (data) => {
    paymentData.value = data
    isCheckoutOpen.value = false
    isProcessingPayment.value = true
    
    try {
      // 1. Verify payment and get download token
      const verifyResponse = await $fetch('/api/verify-payment', {
        method: 'POST',
        body: {
          reference: data.reference,
          productId: data.productId,
          email: data.email,
          customerName: data.name
        }
      })
      
      if (!verifyResponse.body?.success) {
        throw new Error(verifyResponse.body?.error || 'Payment verification failed')
      }
      
      downloadUrl.value = verifyResponse.body.downloadUrl
      
      // 2. Send download email
      await $fetch('/api/send-download-email', {
        method: 'POST',
        body: {
          email: data.email,
          customerName: data.name,
          productId: data.productId,
          downloadUrl: verifyResponse.body.downloadUrl,
          reference: data.reference
        }
      })
      
      // Show success modal
      isSuccessModalOpen.value = true
      
    } catch (error) {
      console.error('Error processing payment:', error)
      showNotification(
        'error',
        'Payment received but there was an issue generating your download link. Please contact support with your reference number.',
        'Processing Error'
      )
    } finally {
      isProcessingPayment.value = false
    }
  }

  const handlePaymentError = (error) => {
    showNotification('error', error, 'Payment Failed')
  }

  const closeSuccessModal = () => {
    isSuccessModalOpen.value = false
    paymentData.value = {}
    downloadUrl.value = ''
  }

  return {
    // State
    isCheckoutOpen,
    isSuccessModalOpen,
    selectedProduct,
    paymentData,
    downloadUrl,
    isProcessingPayment,
    notification,
    
    // Actions
    openCheckout,
    closeCheckout,
    handlePaymentSuccess,
    handlePaymentError,
    closeSuccessModal,
    showNotification,
    hideNotification
  }
}
