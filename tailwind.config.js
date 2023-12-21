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
        'blue-1': '#0A1C3B',
        'blue-2': '#1B2F5A',
        'blue-3': '#2C4279',
        'blue-4': '#3D5598',
        'blue-5': '#4E68B7',
        'blue-6': '#5F7BD6',
        'blue-7': '#7090F5',
        'blue-8': '#81A5FF',
        'blue-9': '#92BAFF',
        'blue-10': '#A3CFFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
