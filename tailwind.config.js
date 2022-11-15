/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#fefeff',
          100: '#fdfefe',
          200: '#fbfcfd',
          300: '#f8fafc',
          400: '#f2f6f9',
          500: '#edf2f7',
          600: '#d5dade',
          700: '#b2b6b9',
          800: '#8e9194',
          900: '#747779',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
}
