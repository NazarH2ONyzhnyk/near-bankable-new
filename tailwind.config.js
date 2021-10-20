module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'

  theme: {
    fontFamily: {
      'body': ['"Segoe UI"'],
    },
    extend: {

      colors: {

        near: {
          100: '#FCFCFC',
          500: '#95E1FF',
          600: '#95E1FF',
          700: '#65A6D5',
          800: '#3A4666',
          900: '#1D2D2D',
        },
        yellow: {
          500: '#FECB58',
        }
      },

    },
  },
  variants: {
    extend: {
      scale: ['active'],
    },
  },
  plugins: [],
}
