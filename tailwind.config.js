/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primaryColor:'#2B77FB',
        lightBlue:'#F2F7FB',
        borderColor: '#ECEFF4',
        textGray: '#6D6D77',
        BoldText: '#111111',
        successColor: '#48C45D',
        dangerColor: '#F25106'
      },
      borderWidth:{
        borderWidth:'1px'
      },
      fontSize:{
        fontTwohalf:'1.7rem',
      }
    },
  },
  plugins: [],
}

