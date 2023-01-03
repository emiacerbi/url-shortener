/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-500': 'hsl(180, 66%, 49%)',
        'primary-800': 'hsl(257, 27%, 26%)',
        'secondary-400': 'hsl(0, 87%, 67%)',
        'neutral-300': 'hsl(0, 0%, 75%)',
        'neutral-400': 'hsl(257, 7%, 63%)',
        'neutral-800': 'hsl(255, 11%, 22%)',
        'neutral-900': 'hsl(260, 8%, 14%)',
      },
      fontSize: {
        body: '18px',
      },
      fontFamily: {
        primary: 'Poppins, sans-serif',
      },
      maxWidth: {
        'screen-lg': '1105px',
      },
    },
  },
  plugins: [],
}
