/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    fontFamily: {
      'raleway': ["Raleway", 'sans-serif', 'system-ui'],
      'serif': ['ui-serif', "Inter", 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

