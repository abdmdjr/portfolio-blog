/* eslint-disable prettier/prettier */
/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        'dark-blue': '#26232B'
      },
      inset: {
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
        '1/5': '20%',
        '2/3': '66%',
        '2/5': '40%',
        '106': '106%',
        '110': '110%',
        '57': '57%',
        '35': '35%',
        '55': '55%',
        '60': '60%',
        '22': '22%',
        '10': '10%',
        '5': '5%'
      },
      spacing: {
        '14': '3.5rem',
        '36': '9rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '192': '50rem'
      },
      fontFamily: {
        'title': ['Signika', 'sans-serif'],
        'dosis': ['Dosis', 'sans-serif']
      },
      minWidth: {
        'maxcontent': 'max-content'
      }
    },
    variants: {},
    plugins: []
  }
}
