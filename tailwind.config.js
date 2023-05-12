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
        'primary': 'rgb(59 30 121/ <alpha-value>)',
        'title': 'rgb(24 42 62/ <alpha-value>)',
        'cream': 'rgb(255 253 253 / <alpha-value>)'
      }
    }
  },
  plugins: []
}