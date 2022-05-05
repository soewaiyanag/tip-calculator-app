const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "457px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        cyan: "rgb(38, 192, 171)",
        "cyan-dark-3": "rgb(0, 73, 77)",
        "cyan-dark-2": "rgb(94, 122, 125)",
        "cyan-dark-1": "rgb(127, 156, 159)",
        "cyan-light-2": "rgb(197, 228, 231)",
        "cyan-light-1": "rgb(244, 250, 250)",
      },
    },
    fontFamily: {
      spaceMono: '"Space Mono", monospace',
    },
  },
  plugins: [],
};
