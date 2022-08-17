/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      default: "#00c896",
      correct: "#00bcc8",
      wrong: "#f47198",
      disabled: "#e0dfdf",
      green: "#00c896",
      darkgreen: "#2e8459",
      gray: "#7d7d7d",
      darkgray: "#383c5a",
      lightgray: "#e0dfdf",
      white: "#ffffff",
    },
  },
  plugins: [],
}
