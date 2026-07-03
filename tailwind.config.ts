import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        linkedin: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#b8d4fe',
          300: '#7cb4fd',
          400: '#3b8df7',
          500: '#0A66C2',
          600: '#0954a3',
          700: '#084585',
          800: '#0a3a6e',
          900: '#0c315c',
          950: '#08203d',
        },
      },
      fontFamily: {
        sans: ['Inclusive Sans', 'system-ui', 'sans-serif'],
        heading: ['Inclusive Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
