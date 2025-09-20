module.exports = {
  content: [
    './app/**/*.{vue,js,ts}',
    './app.vue',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'green-primary': '#10B981', // green-500
        'green-dark': '#065F46', // green-800
        'green-light': '#D1FAE5', // green-100
        'emerald-accent': '#059669', // emerald-600

        // Status Colors
        'success': '#10B981', // green-500
        'error': '#EF4444', // red-500 
        'warning': '#F59E0B', // amber-500
        'info': '#3B82F6', // blue-500
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
    },
  },
  plugins: [],
}
