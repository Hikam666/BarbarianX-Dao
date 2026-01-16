/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px', // Breakpoint tambahan untuk HP kecil
      },
      colors: {
        dark: {
          950: '#0D0D0D',
          900: '#1A1A1A',
          800: '#262626',
        },
        neon: {
          cyan: '#00F5FF',
          pink: '#FF10F0',
          yellow: '#FFF700',
          green: '#39FF14',
        }
      },
      boxShadow: {
        'brutal': '6px 6px 0px 0px #00F5FF',
        'brutal-pink': '6px 6px 0px 0px #FF10F0',
        'brutal-lg': '10px 10px 0px 0px #00F5FF',
        'brutal-sm': '3px 3px 0px 0px #00F5FF',
      },
    },
  },
  plugins: [],
}