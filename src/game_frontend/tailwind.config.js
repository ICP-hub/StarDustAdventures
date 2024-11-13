/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        btnLight:'rgb(123,0,255)',
        secondary : 'rgba(4, 2, 28, 1)',
        'transparent-white':'rgba(255, 255, 255, 0.41)',
        'brand-blue': 'rgba(40, 85, 173, 1)',
      },
      fontFamily:{
        'silkscreen': ['Silkscreen', 'cursive'],
        'pixelify-sans': ['Pixelify Sans', 'sans-serif'],
        'sf-pro-display': ['SF Pro Display', 'sans-serif'],
        'coin':['Coin Ding Dong', 'cursive']
      }
    },
    screens:{
      xs:'420px',
      ...defaultTheme.screens
    }
  },
  plugins: [],
}