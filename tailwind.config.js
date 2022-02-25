module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  corePlugins: {
    // issue: https://github.com/tailwindlabs/tailwindcss/issues/6602
    preflight: false
  },
  plugins: []
}
