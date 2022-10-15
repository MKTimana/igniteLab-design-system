/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize:{
      xs: 14,
      small: 16,
      medium: 18,
      Large: 20,
      xl: 24,
      xxl: 32
    },
    colors:{
      grey :{
        900:'#121214',
        800:'#202024',
        100:'#e1e1e6',
        200:'#c4c4cc',
        400:'#7c7c78',
      },
      
      cyan :{
        500:'#81d1f8',
        300:'#61d4fb',
        hover:'#b3e5fe',
      },

      'transparent':'transparent',
      'black':'#000',
      'white':'#fff'
    },
    extend: {
      fontFamily:{
        sans:'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
