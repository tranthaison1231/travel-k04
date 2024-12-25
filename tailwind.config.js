/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js,tsx}", "index.html"],
  theme: {
    extend: {
      padding: {
        13: "3.25rem",
        26: "6.5rem",
      },
      margin: {
        13: "3.25rem",
        26: "6.5rem",
      },
    },
    fontFamily: {
      primary: ["Bacasime Antique", "sans-serif"],
    },
  },
  plugins: [],
};
