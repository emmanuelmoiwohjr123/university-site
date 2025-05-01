/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#dde9f3',
          200: '#c1d5e9',
          300: '#93b6d9',
          400: '#6190c7',
          500: '#4272b3',
          600: '#325896',
          700: '#2a4578',
          800: '#1E3A8A', // primary
          900: '#1a2d5e',
        },
        burgundy: {
          50: '#fdf2f6',
          100: '#fce7ef',
          200: '#faceda',
          300: '#f6a6b9',
          400: '#ef7490',
          500: '#e54c6d',
          600: '#9F1239', // secondary
          700: '#8e1d3b',
          800: '#771a34',
          900: '#651a30',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#B45309', // accent
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
    },
  },
  plugins: [],
};