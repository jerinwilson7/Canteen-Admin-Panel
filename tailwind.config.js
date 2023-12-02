/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        inchWorm: "#C5ED70",
        raisingBlack: "#161621",
        celadon: "#A3F3B0",
        paleSilver: "#F2F4F4",
        mediumGrey: "#94979A",
        seaGreen: "#37BD6B",
        paleOrange: "#FEAC56",
        chineseBlack: "#171215",
        mistBlue: "#6A6D7C",
      },
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
