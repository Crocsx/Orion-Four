module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      Raleway: ['Raleway', 'Helvetica', 'sans-serif'],
    },
    extend: {
      transitionProperty: {
        'background-color': 'background-color',
      },
      borderRadius: {
        100: '100%',
      },
      colors: {
        'blue-1': '#2e3141',
        'blue-2': '#353849',
        'blue-3': '#3d4051',
        'blue-4': '#454858',
        'blue-5': '#4d5060',
        'blue-6': '#555867',
        'blue-7': '#4c5c96',
        'blue-8': '#45558d',
        'blue-9': '#3f4e85',
        'blue-10': '#39477c',
        'blue-11': '#324072',
        'blue-12': '#2d3a69',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
