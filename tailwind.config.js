const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans-tc": ["Noto Sans TC", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
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
