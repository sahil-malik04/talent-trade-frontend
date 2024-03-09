/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        peacockblue: {
          100: "#016795",
          200: "#0f6f9f",
        },
      },
    },
  },
  plugins: [],
};
