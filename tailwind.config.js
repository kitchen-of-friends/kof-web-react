/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "kof-yellow": "#f2cf08",
        "default-grey": "#f5da00",
      },
      spacing: {
        "5/3": "166%",
        "2/5": "40%",
      },
      transitionDuration: {
        600: "600ms",
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
  important: true,
};
