module.exports = {
  content: [
    './public/*.html',
    './public/tw/*.html',
    './public/js/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require( '@tailwindcss/forms' ),
    require( '@tailwindcss/typography' ),
    require( '@tailwindcss/aspect-ratio' ),
  ],
}
