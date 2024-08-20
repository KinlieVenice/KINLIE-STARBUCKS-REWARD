/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      // fontFamily: {
      //   poppins: "Poppins",
      // },
      colors: {
        primary: "#00754a",
        secondary: "#1e3932",
        tertiary: "#d0eae4",
      },
    },
  },
  plugins: [],
};

