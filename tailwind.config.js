/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: "Outfit",
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#f5b754",
        dark: "#1b1b1b",
      },
      fontFamily: {
        kanit: "Kanit",
      },
      backgroundImage: {
        "book-pattern":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(img/slider/2.jpg)",
        "promo-pattern":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(img/slider/1.jpg)",
        "message-pattern":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(img/slider/3.jpg)",
        "aston-pattern":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(img/slider/3.jpg)",
        "bentley-pattern":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(img/slider/11.jpg)",
        "audi-pattern":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(img/slider/14.jpg)",
      },
    },
  },
  plugins: [],
}
