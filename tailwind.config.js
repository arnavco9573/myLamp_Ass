/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: '#8455F6',
        brandSecondary: "#A878F7",
        backGroundColor:"#F0EAFD",
      },
    },
  },
  plugins: [],
}
