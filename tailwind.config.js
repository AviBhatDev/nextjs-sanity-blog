/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Prompt', 'sans-serif'],
      main: ['Work Sans', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
