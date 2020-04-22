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
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem'
      },
      fontFamily: {
        // eslint-disable-next-line prettier/prettier
        'body': 'Quicksand, sans-serif'
      }
    }
  },
  variants: {},
  plugins: []
}
