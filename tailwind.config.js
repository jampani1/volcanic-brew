/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          DEFAULT: '#6F4E37',
          dark: '#5D4129',
          light: '#8B6F5C',
        },
        dourado: {
          DEFAULT: '#C9A227',
          dark: '#A88620',
        },
        serra: {
          DEFAULT: '#4A7C59',
          dark: '#3D6549',
        },
        creme: '#F5F0E6',
        texto: {
          DEFAULT: '#2D2A26',
          light: '#6B6560',
        },
        cta: {
          DEFAULT: '#C9A227',  // dourado - vai GRITAR na página
          hover: '#A88620',
        }
      },
      fontFamily: {
        titulo: ['Playfair Display', 'serif'],
        corpo: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
