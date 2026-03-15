/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#1B427D',
        'navy-dark': '#142f5a',
        'cvpr-blue': '#070bff',
        'sub-nav': '#F6f6f6',
        'firstback': '#eeeeee',
      },
    },
  },
  plugins: [],
}
