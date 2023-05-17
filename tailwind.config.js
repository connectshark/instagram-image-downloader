/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'pages/**/*.vue',
    'content/**/**.md',
    'layouts/**/*.vue',
    'components/**/**.vue'
  ],
  theme: {
    fontFamily: {
      'nunito': [`'Ubuntu'`, `'Noto Sans TC'`, 'sans-serif', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas']
    },
    extend: {
      minHeight: {
        'min-svh': 'calc(100svh - 80px - 104px)'
      },
      colors: {
        background: '#f3f6fc',
        text: '#070f1c',
        primary: '#b22e5f',
        secondary: '#ffffff',
        accent: '#ce4846'
      }
    }
  },
  plugins: []
}