/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    fontFamily: {
      'raleway': ["Raleway", 'sans-serif', 'system-ui'],
      'inter': ['ui-serif', "Inter", 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/banner.png')",
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

