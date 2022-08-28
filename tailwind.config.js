/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./pages/index.html", "./pages/**/*.html"],
  theme: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      red: colors.red,
      blue: colors.blue,
      green: colors.green,
      yellow: colors.yellow,
      "blurple": "#5865F2", // Discord Branding color
      "old-blurple": "#7289DA",
      "orangered": "#FF4500", // Reddit Branding color
      "orangered-alt": "#FF8100",
      "github-gray": "#171515", // GitHub Branding color
      "github-gray-alt": "#515151",
    },
    extend: {},
  },
  plugins: [],
}
