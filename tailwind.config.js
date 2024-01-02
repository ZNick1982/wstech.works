/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      blueMain: '#323F90',
      secondBlue: '#3F75B6',
      orange: '#F4863B',
      back: '#D6D9E9',
      white: '#FFFFFF',
    }
  },
  plugins: [],
}