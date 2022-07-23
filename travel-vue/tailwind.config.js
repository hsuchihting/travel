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
        borderColor: "#4E582E",
      },
      fontFamily: {
        SourceHanSerifTC: "Noto Sans TC",
      },
      width: {
        locationInputW: "600px",
        calendar: "264px",
        infoImgW: "594px",
        locationW: "31.33333%",
        hotLocationImgW: "25%",
        hotLocationBgW: "95%",
      },
      height: {
        infoImgH: "166px",
        locationImgH: "204px",
        hotLocationImgH: "320px",
        hotLocationBgH: "422px",
      },
      borderRadius: {
        infoImgRounded: "50px",
      },
    },
  },

  plugins: [],
};
