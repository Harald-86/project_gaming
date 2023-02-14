/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-background": "#181818",
        "main-text-color": "#ADADAD",
        "weak-text-color": "#484848",
        "banner-text-color": "#606060",
        "span-text-color": "#FFD700",
      },
    },
  },
  plugins: [],
};
