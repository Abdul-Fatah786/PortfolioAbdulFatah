/** @type {import('tailwindcss').Config} */
const { gray, pink, purple, sky, slate, stone, neutral, ...rest } = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      gray,     // ← replaces coolGray/trueGray
      sky,      // ← replaces lightBlue
      slate,    // ← replaces blueGray
      stone,    // ← replaces warmGray
      neutral,  // ← replaces trueGray
      primary: purple,
      secondary: pink,
      white: "#ffffff",
      black: "#000000",
    },
  },
  plugins: [],
};
