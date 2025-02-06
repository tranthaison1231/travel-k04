/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js,tsx}", "index.html"],
  theme: {
    extend: {
      padding: {
        1.5: "0.375rem",
        13: "3.25rem",
        19: "4.75rem",
        26: "6.5rem",
      },
      margin: {
        1.5: "0.375rem",
        13: "3.25rem",
        19: "4.75rem",
        26: "6.5rem",
      },
      spacing: {
        23: "5.75rem",
        100: "25rem",
        120: "30rem",
        174: "42rem",
        256: "64rem",
      },
      colors: {
        primary: "#1877F2",
      },
    },
    fontFamily: {
      primary: ["Bacasime Antique", "sans-serif"],
    },
  },
  plugins: [],
};
