/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/index.html',
    './src/**/*.{html,js}',
  ],// or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'github-bg': 'rgb(36 41 47)',
        'blue-1':'#0C7DBE'
       }),
      height:{
       "3.75":"3.75rem"
      },
      width:{
        "12-1":"2.5%"
      }
    },
  },
  variants: {},
  plugins: [],
}