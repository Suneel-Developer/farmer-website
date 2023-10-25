/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#FFF",
        transparent_50: "rgba(255, 255, 255, 0.02)",
        transparent_100: "rgba(255, 255, 255, 0.05)",
        transparent_200: "rgba(255, 255, 255, 0.10)",
        transparent_300: "rgba(255, 255, 255, 0.25)",
        transparent_500: "rgba(255, 255, 255, 0.50)",
        transparent_600: "rgba(255, 255, 255, 0.03)",
        transparent_700: "rgba(255, 255, 255, 0.07)",
        vibrant_yellow: "#FBDF4A",
        black: "#000",
        light_white: "rgba(255, 255, 255, 1)",
        dark_white: "rgba(255, 255, 255, 0.75)",
        drawer_bg: "#121212",
        dropdown_bg: "#1b1b1b",
        dropdown_border: "#ffffff1f",
        icon_color: "rgb(252, 114, 255)",
        hover_bg: "#99a1bd14",

        border_color:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 49.51%)",
      },
      screens: {
        'max-lg': { 'max': '1100px' },
      },
      backgroundImage: {
        "gradient-bg":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 49.51%)",
      },
      maxWidth: {
        "faqMax-width": "615px",
        "hrMax-width": "327px",
      },
      lineHeight: {
        tracking1: "1.08px",
        tracking2: ".72px",
      },
      fontSize: {
        28: "28px",
        12: "12px",
        14: "14px",
      },
      height: {
        76: "76px",
        70: "500px",
      },
      letterSpacing: {
        16: "0.16px",
        1: "1.08px",
      },
      width: {
        45: "45%",
        70: "360px",
      },

      boxShadow: {
        sliderShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.30) inset",
        navbarShadow: "0 4px 12px 0 #00000026",
      },
      borderColor: {
        nav_color:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 49.51%)",
      },
    },
  },
  plugins: [],
};
