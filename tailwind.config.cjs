/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    
    colors:{
      transparent: 'transparent',

      gray: {
        100 :'#e1e1e6',
        200 :'#c4c4cc',
        400 :'#7c7c8a',
        800 :'#29282e',
        900 :'#1e1e1e'
      },
      
      cyan: {
        300 :'#81d8f7',
        500 :'#61dafb'
      },
  
      'black':'#000000',
      'white':'#ffffff'

    },
    
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
