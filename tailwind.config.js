/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "rubik": ['Rubik', 'sans-serif'],
        "ibarra": ['Ibarra Real Nova', 'sans-serif']
      },
      fontSize: {
        '4xl': ['2.5rem', '2.65rem']
      },
      letterSpacing: {
        tight: '-0.01em'
      }
    },
  },
  plugins: [],
}

