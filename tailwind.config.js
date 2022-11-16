/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#fefeff',
          100: '#E2E8F0',
          200: '#A0AEC0',
          300: '#f8fafc',
          400: '#f2f6f9',
          500: '#edf2f7',
          600: '#d5dade',
          700: '#b2b6b9',
          800: '#8e9194',
          900: '#747779',
        },
        blue: {
          50: '#f6f7fe',
          100: '#edeffc',
          200: '#d1d7f9',
          300: '#b5bef5',
          400: '#7e8eed',
          500: '#475de5',
          600: '#4054ce',
          700: '#3546ac',
          800: '#2b3889',
          900: '#232e70',
        },
      },
      fontSize: {
        sm: '0.75rem', // 12px
        md: '0.875rem', // 14px
        lg: '1rem', // 16px
        xl: '1.125rem', // 18px
      },
      lineHeight: {
        input: '150%',
      },
      maxHeight: {
        40: '40px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
}
