/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js,tsx}", "index.html"],
  theme: {
    extend: {
      padding: {
        13: "3.25rem",
        19: "4.75rem",
        26: "6.5rem",
        
      },
      margin: {
        13: "3.25rem",
        19: "4.75rem",
        26: "6.5rem",
      },
      spacing: {
        23: "5.75rem",
        120: "30rem",
        174: "42rem",
        256: "64rem",
        
      },
    },
    fontFamily: {
      primary: ["Bacasime Antique", "sans-serif"],
    },
  },
  plugins: [],
};
