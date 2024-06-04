/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: '#FFFBEB',
        secondaryBg: '#0F172A',
        cardBg: '#FDE68A',
        brownBg: '#78350F',
        blueText: '#0F172A',
        brownText: '#78350F',
      },
    },
  },
  plugins: [],
}
