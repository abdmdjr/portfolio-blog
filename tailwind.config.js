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
        '57': '55%',
        '35': '35%',
        '55': '55%',
        '60': '60%',
        '22': '22%',
        '15': '15%',
        '10': '10%',
        '5': '5%',
        '25': '25px',
        '117': '117px',
        '67': '67px',
        '145': '145px',
        '379': '379px',
      },
      spacing: {
        '4s': '4.4rem',
        '6s': '9rem',
        '7s': '9rem',
        '14': '3.5rem',
        '18': '5.5rem',
        '28': '7rem',
        '36': '9rem',
        '42': '14rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '192': '50rem',
        '150': '150rem'
      },
      minWidth: {
        'maxcontent': 'max-content'
      }
    },
    purge: {
      // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
      enabled: process.env.NODE_ENV === "production",
      content: [
        "components/*.vue",
        "layouts/*.vue",
        "pages/*.vue",
        "plugins/*.js",
        "nuxt.config.js"
      ]
    },
    variants: {},
    plugins: []
  }
}
