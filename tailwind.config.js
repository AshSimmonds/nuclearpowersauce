/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': "Lato, sans-serif",
      'serif': "OCR A, serif"
    },
  },
  darkMode: "class",
  plugins: [],
}
