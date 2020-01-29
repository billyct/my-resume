module.exports = {
  theme: {
    container: {
      center: true,
      padding: '5rem',
    },

    colors: {
      primary: '#1A2527',
      white: '#ffffff',
    },

    textColor: theme => ({
      ...theme('colors'),
      default: '#4a5568',
      secondary: '#a0aec0',
    }),

    borderColor: {
      default: '#e2e8f0'
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
