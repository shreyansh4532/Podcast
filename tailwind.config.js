/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleGrey: 'var(--purple-grey)',
        white: 'var(--white)',
      },
    },
  },
  plugins: [],
}