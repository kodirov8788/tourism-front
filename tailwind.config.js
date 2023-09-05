/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgimage': "url('./images/bg-image.jpg')"
      }
    }
  },
  plugins: [],
}