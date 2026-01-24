/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fustat', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6E51E0', // Updated from provided design
          dark: '#5a43b5',
          light: '#8f7bf7',
        },
        secondary: {
          DEFAULT: '#060B13', // Headings
          gray: '#363D4F', // Body text
          light: '#979FB4', // Lighter text
          subtle: '#505A71', // Copyright text
        },
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F7F8FA', // Alternating section background
        },
        border: {
          DEFAULT: '#E9EBF1',
        },
      },
      boxShadow: {
        'stellar': '0px 12px 96px rgba(6, 11, 19, 0.1)',
        'stellar-sm': '0px 6px 8px -4px rgba(127, 81, 242, 0.3), 0px 0px 0px 1.5px #6E51E0, 0px 1px 1px rgba(38, 20, 85, 0.5)', // For highlighted elements
        'card': '0px 0px 0px 4px #FFFFFF, 0px 12px 96px rgba(6, 11, 19, 0.06)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(180deg, #F7F8FA 14.69%, rgba(247, 248, 250, 0) 134.18%)',
        'badge-gradient': 'linear-gradient(180deg, rgba(100, 46, 255, 0.12) -3.04%, rgba(100, 46, 255, 0) 100%)',
      }
    },
  },
  plugins: [],
}
