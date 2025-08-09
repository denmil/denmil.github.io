/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html"
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}