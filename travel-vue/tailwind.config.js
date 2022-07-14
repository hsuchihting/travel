/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A8B67E",
        primaryDark: "#4B5927",
      },
      fontFamily: {
        "Source Han Serif TC": "Source Han Serif TC",
      },
    },
  },

  plugins: [],
};
