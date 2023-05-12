
const APP_NAME = 'Instagram Image Downloader'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  runtimeConfig: {
    COOKIE: import.meta.env.COOKIE
  },
  tailwindcss: {
    viewer: false
  },
  app: {
    rootId: 'app',
    head: {
      title: APP_NAME,
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&family=Ubuntu:wght@400;700&display=swap' }
      ],
    }
  }
})