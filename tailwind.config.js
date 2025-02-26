/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
    {colors: {
      'primary': '#DAD2FF',
      'secondary': '#00FF00',
      'tertiary': '#0000FF',
      'quaternary': '#FFFF00',
      'accent': '#493D9E'
    }},
  },
  plugins: [],
}