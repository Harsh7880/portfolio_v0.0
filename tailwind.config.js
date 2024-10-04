/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        "Mogra": ['Mogra', 'sans-serif'] 
    } ,
    colors: {
      'custom-dark': 'rgb(19, 20, 21)',
      'background': '#17181B'
    },
    boxShadow: {
      custom: 'rgba(84, 66, 38, 0.04) 0px 0px 0px 0px, rgba(84, 66, 38, 0.12) 0px 0px 0px 0px, rgba(84, 66, 38, 0.318) 0px 0px 0px 0px, rgb(84, 66, 38) 0px 0px 0px 0px',
    },
    
    },
  },
  plugins: [],
}
