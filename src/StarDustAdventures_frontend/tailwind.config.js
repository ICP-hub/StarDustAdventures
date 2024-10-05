/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        btnLight:'rgb(123,0,255)',
        secondary : 'rgba(225, 24, 51, 1)',
        'transparent-white':'rgba(255, 255, 255, 0.41)'
      },
      fontFamily:{
        'silkscreen': ['Silkscreen', 'cursive'],
        'pixelify-sans': ['Pixelify Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}