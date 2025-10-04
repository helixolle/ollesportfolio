/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom': '#FFFEFB',
        'header': '#242222',
        'body': '#3f3f46',
      },
      fontFamily: {
        'serif-custom': ['EB Garamond', 'Times New Roman', 'serif'],
        'sans-custom': ['Futura', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
