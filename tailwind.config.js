/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // Minimum width of 500px and maximum width of 767px
      'mob': { 'min': '320px', 'max': '430px' },

      // Minimum width of 768px and maximum width of 1023px
      'tab': { 'min': '431px', 'max': '900px' },

      // Maximum width of 1279px
      'lap': { 'min': '901px', 'max': '1440px' },
    },
    extend: {},
  },
  plugins: [],
}

