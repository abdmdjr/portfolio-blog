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
        '55': '55%',
        '60': '60%',
        '22': '22%',
        '10': '10%',
        '5': '5%'
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem'
      },
      fontFamily: {
        // eslint-disable-next-line prettier/prettier
        'title': ['Mitr', 'sans-serif']
      }
    }
  },
  variants: {},
  plugins: []
}
