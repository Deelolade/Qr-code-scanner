/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend:{
      fontFamily:{
        Playwrite: ['"Playwrite IN"', "sans-serif"]
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
  
}