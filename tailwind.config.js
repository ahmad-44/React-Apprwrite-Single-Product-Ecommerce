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
        blue: "#2980b9",
        blueLight: "#3498db",
      },
    },
  },
  plugins: [],
};
