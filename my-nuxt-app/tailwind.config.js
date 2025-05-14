/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'fur': {
          'blue': '#132A3B',
          'brown': '#FAF9F5',
        },
        'fur-accent': {
          'blue': '#1A1A1A',
          'bone': '#FAF7F0',
          'beige': '#1A1A1A',
          'beer': '#1A1A1A',
        },
        'neutral': {
          1: '#1A1A1A',
          2: '#374151',
          3: '#5b72b0',
          4: '#e5e7eb',
          5: '#f8fcfc',
          6: '#FFFFFF',
        }
      },
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['176px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'h1-mobile': ['48px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'h2': ['96px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'h2-mobile': ['40px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'h3': ['56px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'h3-mobile': ['36px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'body-large': ['96px', { lineHeight: '1.5', letterSpacing: '0' }],
        'body': ['30px', { lineHeight: '1.5', letterSpacing: '0' }],
        'body-small': ['16px', { lineHeight: '1.5', letterSpacing: '0' }],
        'body-large-mobile': ['30px', { lineHeight: '1.5', letterSpacing: '0' }],
        'body-mobile': ['20px', { lineHeight: '1.5', letterSpacing: '0' }],
        'body-small-mobile': ['16px', { lineHeight: '1.5', letterSpacing: '0' }],
      },
    },
  },
  plugins: [],
}