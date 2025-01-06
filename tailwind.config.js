/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'red_hat_display':'"Red Hat Display"',
      },
      screens:{
        'xs':'375px',
      }
    },
  },
  plugins: [],
}

