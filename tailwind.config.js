/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#17352b',
        moss: '#315846',
        sand: '#e8dac3',
        linen: '#f7f1e8',
        timber: '#9b673d',
        bark: '#5c3d28',
        charcoal: '#202321',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(32, 35, 33, 0.12)',
      },
    },
  },
  plugins: [],
};
