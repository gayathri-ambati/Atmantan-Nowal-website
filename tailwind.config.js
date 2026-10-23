/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF6E8',
          100: '#F7ECCF',
          200: '#EFD99E',
          300: '#E8C768',
          400: '#DFA900',
          500: '#C29500',
          600: '#A67A00',
          700: '#7A5A00',
          800: '#553F00',
          900: '#3D2D00',
        },
        forest: {
          50: '#F2F5F3',
          100: '#E3EAE5',
          200: '#C9D8CE',
          300: '#9DB6A7',
          400: '#6E8E7C',
          500: '#4A6B57',
          600: '#365040',
          700: '#263D30',
          800: '#1D3127',
          900: '#14211B',
        },
        ivory: '#F6F2E9',
        sage: {
          light: '#C9D5BE',
          DEFAULT: '#A5B39A',
          dark: '#8A9A7F',
        },
        charcoal: '#292D29',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'eyebrow': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.25em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scroll-indicator': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(24px)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1s ease-out forwards',
        'fade-in': 'fade-in 1.5s ease-out forwards',
        'scroll-indicator': 'scroll-indicator 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
