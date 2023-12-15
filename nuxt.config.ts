// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [{
        name: 'theme-color',
        content: '#21283a',
      }],
      title: process.env.APP_TITLE
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-svgo'],
  svgo: {
    global: false,
    autoImportPath: '~/assets/icons/',
    componentPrefix: 'icons',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'configs/tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
})
