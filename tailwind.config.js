const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans-tc": ["Noto Sans TC", "sans-serif"],
        montserrat: ["Montserrat", "Verdana", "sans-serif"],
        "monument-extended": ["Monument Extended", "sans-serif"],
        "pilot-command-italic": ["Pilot Command Italic", "sans-serif"],
      },
      colors: {
        neutral: {
          1: "#FFFFFF",
          2: "#858993",
          3: "#151F3F",
          4: "#0E1835",
          5: "#06102B",
          6: "#000000",
        },
        primary: {
          1: "#9DA4FF",
          2: "#DCDEFF",
          3: "#6E77E9",
        },
        secondary: {
          1: "#55FFAD",
        },
        yellow: {
          1: "#FFE34E",
          2: "#FFF385",
        },
      },
      borderRadius: {
        card: "32px",
        button: "100%",
      },
      width: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "screen-sm": "640px",
        "screen-md": "768px",
        "screen-lg": "1024px",
        "screen-xl": "1280px",
        "screen-2xl": "1536px",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [
    require("tailwindcss-aria-plugin"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          s: (value) => ({
            width: value,
            height: value,
          }),
        },
        { values: theme("spacing") }
      );
    }),
  ],
};
