/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-red': 'hsl(var(--color-bright-red) / <alpha-value>)',
        'dark-blue': 'hsl(var(--color-dark-blue) / <alpha-value>)',
        'grayish-dark-blue': 'hsl(var(--color-grayish-dark-blue) / <alpha-value>)',
        'light-grey': 'hsl(var(--color-light-grey) / <alpha-value>)',
        'slightly-desaturated-cyan': 'hsl(var(--color-slightly-desaturated-cyan) / <alpha-value>)',
        'very-light-grey': 'hsl(var(--color-very-light-grey) / <alpha-value>)',
      },
      fontFamily: {
        "rubik": ['Rubik', 'sans-serif'],
        "ibarra": ['Ibarra Real Nova', 'sans-serif'],
        "publicSans": ['Public Sans', 'sans-serif']
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

