const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans-tc": ["Noto Sans TC", "sans-serif"],
        "montserrat": ['Montserrat', "sans-serif"],
        "monument-extended": ["Monument Extended", "sans-serif"],
        "pilot-command-italic": ["Pilot Command Italic", 'sans-serif']
      },
      fontSize: {
        // CH Heading
        "ch-h1": ["48px", "72px"],
        "ch-h2": ["40px", "60px"],
        "ch-h3": ["32px", "48px"],
        "ch-h4": ["24px", "36px"],
        "ch-h5": ["20px", "28px"],
        "ch-title": ["16px", "20px"],
        "ch-sub-title": ["14px", "18px"],

        // CH Paragraph
        "ch-p1": ["24px", "36px"],
        "ch-p2": ["20px", "28px"],
        "ch-p3": ["16px", "20px"],
        "ch-p4": ["14px", "18px"],
        "ch-caption": ["12px", "16px"],
        // EN Heading
        "en-h1": ["48px", "72px", "10%"],
        "en-h2": ["40px", "60px", "10%"],
        "en-h3": ["32px", "48px", "10%"],
        "en-h4": ["24px", "36px", "10%"],
        "en-title": ["16px", "20px", "10%"],
        "en-sub-title": ["14px", "18px", "10%"],

        // EN Paragraph
        "en-p1": ["24px", "36px"],
        "en-p2": ["20px", "28px"],
        "en-p3": ["16px", "20px"],
        "en-p4": ["14px", "18px"],
        "en-caption": ["12px", "16px"],
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
