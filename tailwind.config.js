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
        'profile-bg':"url('./src/assets/img/profile-bg.jpg')",
        'project-1':"url('./src/assets/img/p1.jpg')",
        'project-2':"url('./src/assets/img/p2.jpg')",
        'project-3':"url('./src/assets/img/p3.jpg')"
      }
    },
  },
  plugins: [],
}

