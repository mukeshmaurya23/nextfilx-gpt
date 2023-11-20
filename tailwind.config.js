/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e50914",
        secondary: "#e8f0fe",
        bgBlack: "#2d2d2d",
        primaryDark: "#000000",
        primaryLight: "#ffffff",
        borderGreen: "#2ecc71",
        errorColor: "#e87c03",
      },
      fontSize: {
        mainBanner: "3rem",
        mainBannerMobile: "2rem",
        mainBannerMobileSmall: "1.5rem",
        descriptionFont: "1.5rem",
        defaultFont: "1rem",
        formHeading: "32px",
        labelFont: "11px",
      },
      fontWeight: {
        mainBannerBold: "900",
        mainBannerBoldMobile: "700",
        defaultBold: "400",
        formHeadingBold: "500",
      },
      fontFamily: {
        SemplicitaPro: ["SemplicitaPro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
