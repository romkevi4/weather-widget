/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter', 'sans-serif'],
      },
      minHeight: {
        custom: ['3rem']
      }
    },
  },
  plugins: [],
}