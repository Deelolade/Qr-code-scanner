/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend:{
      fontFamily:{
        Playwrite: ['"Playwrite IN"', "sans-serif"]
      },
      colors:{
        dark:{
          primary:"#02020B",
          secondary:"#ffffff"
        },
        light:{
          primary:"#ECF0F1",
          secondary:"#504136"
        }
      }
    }
  },
  plugins: [
    // #02020B 05299E
    // light mode #ECF0F1 #504136
    require('daisyui'),
  ],
  
}