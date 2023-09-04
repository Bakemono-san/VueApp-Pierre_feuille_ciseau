/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        triangle: "url('./src/assets/images/bg-triangle.svg')",
        pentagone: "url('./src/assets/images/bg-pentagon.svg')",
      },
      colors: {
        scoreText: "hsl(229, 64%, 46%)",
        darkText: "hsl(229, 25%, 31%)",
        headerOutline: "hsl(217, 16%, 45%)",
      },
    },
  },
  plugins: [],
};
