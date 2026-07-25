/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark premium logistics palette
        'bg-primary': '#0B1012',
        'bg-secondary': '#111719',
        'bg-elevated': '#151C1F',
        'border': '#283236',
        'text-primary': '#F7F8F8',
        'text-muted': '#AAB4B8',
        'accent-lime': '#A7FF00',
        'accent-hover': '#B7FF33',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'Manrope', 'sans-serif'],
      },
      maxWidth: {
        container: '1180px',
      },
      spacing: {
        section: '88px',
        'section-lg': '104px',
      },
    },
  },
  plugins: [],
}
