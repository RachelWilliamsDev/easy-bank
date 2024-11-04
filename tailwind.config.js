/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkBlue: "hsl(233, 26%, 24%)",
          limeGreen: "hsl(136, 65%, 51%)",
          brightCyan: "hsl(192, 70%, 51%)",
        },
        neutral: {
          grayishBlue: "hsl(233, 8%, 62%)",
          lightGrayishBlue: "hsl(220, 16%, 96%)",
          veryLightGray: "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        sans: ['"Public Sans"', ...fontFamily.sans],
      },
      fontSize: {
        base: "18px",
      },
    },
  },
  plugins: [],
};
