/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        surface: '#0D0D0D',
        primary: '#F5F5F5',
        secondary: '#A1A1A1',
        muted: '#666666',
        accent: '#00F0FF', // Cyan accent
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
