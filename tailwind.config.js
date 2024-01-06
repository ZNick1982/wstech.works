/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '1/2-2rem': 'calc(50% - 2rem)',
        '1/2-1rem': 'calc(50% - 1rem)',
      }
    },
    colors: {
      blueMain: '#323F90',
      secondBlue: '#3F75B6',
      orange: '#F4863B',
      greyBlue: '#ced7e1',
      back: '#D6D9E9',
      white: '#FFFFFF',
    }
  },
  plugins: [],
}