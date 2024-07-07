/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
        customPink: '#F7ECDC',
        darkGray: '#292929',
        lavender: '#B38BFA',
        lightPink: '#FF79F2',
        skyBlue: '#43E6FC',
        peach: '#F19576',
        deepBlue: '#0047FF',
        softBlue: '#6691FF',
        grey:'#979797',
      },},
  },
  plugins: [],
}

