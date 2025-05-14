import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    baseURL: '/',
    head: {
      title: 'Fur Bryghus',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  srcDir: 'src/',
  compatibilityDate: '2025-05-14',
  dir: {
    public: 'public'
  }
})