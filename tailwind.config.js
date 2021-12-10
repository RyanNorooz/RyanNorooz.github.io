module.exports = {
  mode: 'jit',
  darkMode: 'media', // 'media' or 'class' or false

  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // ...
  ],

  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],

  theme: {
    extend: {
      fontWeight: {
        extrablack: 950,
      },
    },
  },
}
