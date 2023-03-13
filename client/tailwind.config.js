/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"Inter"', 'cursive']
      },
      colors: {
        'slate': {
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0F172A',
        },
        'orange': {
          000: '#7e5bef',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          
        },
        'pink': {
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
        },
        'gray': '#f3f4f6',
      },
    },
  },
  plugins: [],
}
