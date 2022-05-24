module.exports = {
  purge: [],
  content: [
    './public/*.html',
    './public/js/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require( '@tailwindcss/forms' ),
  ],
}
