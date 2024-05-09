/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-map': "url('/map.jpg')",
        'bg-map-water': "url('/map-watercolor.jpg')",
        'bg-map-blue': "url('/map-blue.jpg')",
      }
    },
  },
  plugins: [],
}

