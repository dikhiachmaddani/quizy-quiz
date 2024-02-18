/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#C52DC9",
        "blue-primary": "#011936",
        "neutral-primary": "#F4FFFD",
        "black-primary": "#1E1E1E",
        "yellow-primary": "#F9DC5C",
        "pink-primary": "#350136",
      }
    },
  },
  plugins: [],
}

