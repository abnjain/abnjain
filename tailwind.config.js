/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        header: 'var(--color-header)',
        accent: 'var(--color-accent)',
        'accent-muted': 'var(--color-accent-muted)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        'custom-blueGreen': '#1c393d',
        'custom-fireOpal': '#EB3A56',
      },
      boxShadow: {
        glow: 'var(--shadow-glow)',
        soft: 'var(--shadow-soft)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display : "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      }   
      addUtilities(newUtilities);   
    },
  ],
}
