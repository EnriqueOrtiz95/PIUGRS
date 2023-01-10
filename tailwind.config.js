/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
      xxl: "1440px",
    },
    extend: {
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        16: "1rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
      },
      fontFamily: {
        "text-fond": ["DM Sans", "sans-serif"],
        "text-roboto": ["Roboto", "sans-serif"],
        "text-monset": ["Montserrat", "sans-serif"],
        "text-poppins": ["Poppins", "sans-serif"],
        "text-xolonium": ["Xolonium", "sans-serif"],
      },
      colors: {
        "blue-text": "#293278",
        "red-fond": "#CB452B",
        "blue-button": "#006699",
        "orange-button": "#FE5000",
        "blue-title": "#252B42",
        "gray-text": "#737373",
        "blue-low": "#8EC2F2",
        "gray-low": "#8E8F95",
        "blue-bg": "#4E95FF",
        "red-alert": "#FF3D00",
        "blue-drop": "#BDD5E2",
        "gray-form": "#4A5568",
        "gray-form2": "rgba(74, 85, 106, 0.4)",
        "gray-form3": "rgba(74, 85, 106, 0.15)",
        "gray-form4": "rgba(74, 85, 106, 0.25)",
        "gray-border": "#E8E8E8",
        "gray-description": "#3F3E53",
        "blue-bg-low": "#EFF9FF",
        "gray-8D": "#8D8D8D",
        "blue-very-low": "#DBF2FF",
        overlay: "rgba(0, 0, 0, .7)",
        overlay2: "rgba(0, 0, 0, .3)",
        "pink-dash": "#F24B73",
        "yellow-dash": "#FFC107",
        "green-dash": "#4CAF50",
        "gray-black": "#C4C4C4",
        "gray-input": "#2D3748",
        purple: "#5A6298",
        green: "#03B75F",
        "clear-blue": "#F6FCFF",
        "gray-blue": "#E8F7FF",
        "blue-text-drop": "#434C89",
        "black-text": "#1E2833",
        "black-bg": "rgba(18, 18, 18,/ 1)",
        "gray-BA": "#BABABA",
      },
      height: {
        "28r": "28rem",
        "32r": "32rem",
        "42r": "42rem",
        "46r": "46rem",
      },
      fontSize: {
        32: "2rem",
      },
    },
  },
  plugins: [],
};