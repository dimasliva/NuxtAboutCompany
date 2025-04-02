import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3002
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss',
    '@nuxt/fonts',

  ],

  css: ['~/shared/assets/styles/global.scss'],

  hooks: {
    'vite:extendConfig': (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    }
  },
  runtimeConfig: {
    ssr: true,
    public: {
    },
  },
  // https://bato.dev/
  components: [
    {
      path: 'shared',
      extensions: ['.vue'],
      prefix: 'Shared',
    },
    {
      path: 'features',
      extensions: ['.vue'],
      prefix: 'Feature',
    },
    {
      path: 'widgets',
      extensions: ['.vue'],
      prefix: 'Widget',
    },
    {
      path: 'entities',
      extensions: ['.vue'],
      prefix: 'Entity',
    },
  ],
  imports: {
    dirs: [
      'shared/**/*.ts',
      'features/**/*.ts',
      'widgets/**/*.ts',
      'entities/**/*.ts',
    ],
  },
  typescript: {
    strict: true,
  },
  build: {
    transpile: ['vuetify'],
  },
})