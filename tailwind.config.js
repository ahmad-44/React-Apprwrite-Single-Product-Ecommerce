/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#363740",
        purple: "#7367F0",
        accent: "#2c3e50",
        accentLight: "#34495e",
        cloud: "#ecf0f1",
        blueCustom: "#2980b9",
        blueLight: "#3498db",
      },
      boxShadow: {
        dark: "0 4px 14px rgba(7, 7, 7, 0.2)", // Darker shadow
      },
    },
  },

  plugins: [],
};
