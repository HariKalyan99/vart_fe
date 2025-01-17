/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cement': "#71645C",
        'primary': 'rgba(226, 184, 129, 0.22)',
        'primary2': 'rgba(141, 127, 135, 0.22)',
        'chestnut': "#70645C",
        'raddishpinkdark': '#F6E2D9',
        'raddishpinklight': "#FFEBE2",
        'nostalgicblue': "#CAC5C2",
        'saffron': "#DD8457"
      },
    },
  },
  plugins: [],
}
