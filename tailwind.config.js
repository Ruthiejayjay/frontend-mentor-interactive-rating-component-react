/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
    colors: {
      'orange': 'hsl(25, 97%, 53%)',
      'white': 'hsl(0, 0%, 100%)',
      'light-grey': 'hsl(217, 12%, 63%)',
      'medium-grey': 'hsl(216, 14%, 27%, 1)',
      'grey': 'hsl(213, 30%, 24%)',
      'dark-blue': 'hsl(213, 19%, 18%)',
      'very-dark-blue': 'hsl(216, 12%, 8%)',
      'black': 'hsl(0,0%,0%)'
    },
    fontFamily: {
      Overpass: ['Overpass', 'cursive']
    },
    screens: {

      'md': '700px',
      'lg': '1000px',
      'sm': '370px',
    }
  },
  plugins: [],
}

