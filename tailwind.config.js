module.exports = {
  purge: [],
  content: [
    './public/*.html',
    './public/js/*.js',
    './public/css/*.css',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require( '@tailwindcss/forms' ),
  ],
}
