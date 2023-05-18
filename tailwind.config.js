/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      colors:{
        darkgray:'#1F1F21'
      },
      backgroundImage:{
        'profile':"url('./src/assets/img/profile.png')",
        'profile-bg':"url('./src/assets/img/profile-bg.jpg')"
      }
    },
  },
  plugins: [],
}

