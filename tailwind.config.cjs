/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ['"Inter"', ...fontFamily.sans],
      serif: ["JetBrains Mono", ...fontFamily.serif],
    },
    extend: {
      colors: {
        transparent: "transparent",
        black: "#0B1B33",
        white: "#fff",
        gray: "#f7fafc",
        blue: "#45EBFA",
        inner: "#233247",
      },
    },
  },
  plugins: [],
};
