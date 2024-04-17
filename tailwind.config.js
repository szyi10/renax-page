/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: "Outfit",
    },
    extend: {
      colors: {
        primary: "#f5b754",
        dark: "#1b1b1b",
      },
      screens: {
        xs: "375px",
      },
      fontFamily: {
        kanit: "Kanit",
      },
    },
  },
  plugins: [],
}
