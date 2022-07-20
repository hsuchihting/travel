module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A8B67E",
        primaryDark: "#4B5927",
        primaryLight: "#E5E9D8",
        primaryBg: "#ECEEE9",
        footerBg: "#768350",
        topBg: "#A8B67E4D",
        topIcon: "#788651",
        bannerDesc: "#999999",
        text: "#768350",
        search: "#A8B67E26",
        gray: "#666666",
      },
      fontFamily: {
        SourceHanSerifTC: "Noto Sans TC",
      },
      width: {
        "500px": "600px",
        calendar: "264px",
      },
    },
  },

  plugins: [],
};
