/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        veryDark: "hsl(var(--veryDark) / <alpha-value>)",
        softRed: "hsl(var(--softRed) / <alpha-value>)",
        bgPurple: "hsl(var(--bgPurple) / <alpha-value>)",
        bgBlue: "hsl(var(--bgBlue) / <alpha-value>)",
        darkGrayishBlue: "hsl(var(--darkGrayishBlue) / <alpha-value>)",
        darkGrayish: "hsl(var(--darkGrayish) / <alpha-value>)",
        divider: "hsl(var(--divider) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
