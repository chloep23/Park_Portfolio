/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Regular'],
        bold: ["Bold"],
        extra: ["Extra"],
        young: ["Young"],
        gelasio: ["Gelasio"],
        inter: ["Inter"],
        iMedium: ["InterMedium"],
        ZT: ["ZT"],
        Marcellus: ["Marcellus"]
      },
      spacing:{
        '100': '35rem',
      },
      lineHeight:{
        '12': '6rem',
      },
      colors:{
        lightgray: "#fafafa",
        blue: "#87b2c4",
        pink: "#f0d7d3",
        green: "#a9b8b0",
        beige: "#efece5",
        light: "#f1ede9",
        darkPink: "#c29eaf",
        salmon: "#efd2c8",
        almond: "#f0d9c2",
        cream:"#fbf7f0",
        lightBlue: "#b5c3c4",
        brown: "#a7857a"

      }
    },
  },
  plugins: [],
}