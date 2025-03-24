/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        celeste: "#75beff",
        brightBlue: "#4bb1f5",
        superLightBlue: "#328fcc",
        lightBlue: "#3576b0",
        darkBlue: "#02549C",
        deepBlue: "#062c5d",
        azulito: "#0E6595",
        blueIndigo: "#4472c4",
        aquaMarine: "#2a9591",

        lightGray: "#d6d6d6",
        darkGray: "#D5D5D5",
        deepGray: "#BEBEBE",
        superDeepGray: "#707070",
        deadGray: "#4B4B4B",

        greenGoblin: "#35752d",

        purpleSeance: "#6e2a95",

        orangeOchre: "#d8702b",

        brightRed: "#e14344",
        darkRed: "#B31F20",
      },
      size: {
        hugeText: "300px",
      },
    },
  },
  plugins: [],
};
