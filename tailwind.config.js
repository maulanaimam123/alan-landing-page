/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["loraFamily", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        palette1: "#0C356A",
        palette2: "#279EFF",
        palette3: "#40F8FF",
        palette4: "#D5FFD0",
      },
    },
  },
  plugins: [],
};
