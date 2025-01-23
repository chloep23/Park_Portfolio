/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Regular'],
        bold: ["Bold"],
        extra: ["Extra"]
      },
      spacing:{
        '100': '35rem',
      },
      lineHeight:{
        '12': '6rem',
      }
    },
  },
  plugins: [],
}