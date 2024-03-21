/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'noble-black-400': '#686B6E',
        'noble-black-500': '#363A3D',
        'noble-black-700': '#131619',
        'noble-black-800': '#0D0F10',
        'stem-green-500': '#B6F09C',
        'red-power-600' : '#D0302F',
        'happy-orange-600':'#E26F20',
        'heisenburg-blue-500': '#82DBF7'
      },
      fontSize: {
        'Hxl': ['3rem', {
          lineHeight: '3.6rem',
          letterSpacing: '0',
        }],
        'Hl': ['2.667rem', {
          lineHeight: '3.33rem',
          letterSpacing: '0',
        }],
        'Hm': ['2.3rem', {
          lineHeight: '3rem',
          letterSpacing: '0',
        }],
        'Hsm': ['2rem', {
          lineHeight: '2.667rem',
          letterSpacing: '0',
        }],
        'Hxs': ['1.667rem', {
          lineHeight: '2.33rem',
          letterSpacing: '0',
        }],
        'Bxl': ['1.5rem', {
          lineHeight: '2.333rem',
          letterSpacing: '0.009rem',
        }],
        'Bl': ['1.333rem', {
          lineHeight: '2rem',
          letterSpacing: '0.009rem',
        }],
        'Bm': ['1rem', {
          lineHeight: '1.2rem',
          letterSpacing: '0.009rem',
        }],
        'Bsm': ['0.875rem', {
          lineHeight: '1.2rem',
          letterSpacing: '0.009rem',
        }],
        'Bxs': ['0.75rem', {
          lineHeight: '1.2rem',
          letterSpacing: '0.009rem',
        }],

      },
    },
  },
  plugins: [],
}
