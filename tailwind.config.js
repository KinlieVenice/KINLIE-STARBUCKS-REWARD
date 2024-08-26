/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Urbanist: "Urbanist",
      },
      colors: {
        primary: "#00754a",
        secondary: "#d0eae4",
        tertiary: "#1e3932",
        backG: "#f2f0eb",
      },
      backgroundImage: {
        bgMenu: "url('../img/banner phone1.gif')",
        bgMenuLarge: "url('../img/banner.png')",
        bgBorder: "url('../img/border-img.webp')",
      },
    },
  },
  plugins: [],
};
