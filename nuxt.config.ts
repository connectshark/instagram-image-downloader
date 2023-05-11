
const APP_NAME = 'Instagram Image Downloader'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  runtimeConfig: {
    APP_SECRET: import.meta.env.META_APP_CLIENT_SECRET,
    public: {
      APP_VERSION: import.meta.env.META_APP_VERSION,
      APP_CLIENT_ID: import.meta.env.META_APP_CLIENT_ID,
      APP_REDIRECT_URI: import.meta.env.REDIRECT_URI
    }
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