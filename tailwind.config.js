/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '120': '30rem',
      },
      margin: {
        '120': '50rem',
        '100': '30rem',

      },
      padding: {
        '100': '30rem',
        '120': '50rem',

      },
      colors: {
        whitesmoke: '#f5f5f5', // The hex code for whitesmoke
      },
    },
  },
  plugins: [],
}

