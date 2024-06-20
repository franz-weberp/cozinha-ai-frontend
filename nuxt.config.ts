import { defineNuxtConfig } from 'nuxt/config'
import { fileURLToPath } from "url"

export default defineNuxtConfig({ 
  alias: {
    "@": fileURLToPath(new URL(".", import.meta.url)),
    "@env": fileURLToPath(new URL("./utils/env", import.meta.url)),
    "@styles": fileURLToPath(new URL("./styles", import.meta.url)),
    "@components": fileURLToPath(new URL("./components", import.meta.url)),
    "@layouts": fileURLToPath(new URL("./layouts", import.meta.url)),
    "@utils": fileURLToPath(new URL("./utils", import.meta.url)),
    "@data": fileURLToPath(new URL("./utils/data", import.meta.url)),
    "@pages": fileURLToPath(new URL("./pages", import.meta.url)),
    "@public": fileURLToPath(new URL("./public", import.meta.url)),
    "@svgs": fileURLToPath(new URL("./public/svgs", import.meta.url)),
    "@assets": fileURLToPath(new URL("./assets/svgs", import.meta.url)),
    "@composables": fileURLToPath(new URL("./composables", import.meta.url)),
    "@interfaces": fileURLToPath(new URL("./utils/interfaces", import.meta.url)),
    "@mock": fileURLToPath(new URL("./utils/data/mock", import.meta.url)),
    "@plugins": fileURLToPath(new URL("./utils/plugins", import.meta.url)),
  },

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Franz Weber Pimentel - Software Developer Engineer',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content: 'Portifolio of Franz Weber Pimentel a Software Developer Engineer',
        }
      ],
      link: [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }
      ],
    }
  },
  css: ['~/assets/scss/main.scss'],
  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./assets/scss/base.scss" as *;`
        }
      }
    }
  },

  modules: [
    ['@nuxtjs/google-fonts', {
      preconnect: true, 
      prefetch: true,
      preload: true,
      families: {
        'Bebas+Neue': true,
        'Fira+Code': [300, 400, 500, 600, 700],
        Roboto: true,
      },
      display: 'swap'
    }],
  ],

  spaLoadingTemplate: false,
})