export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'costify',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/reset.scss',
    '~/assets/scss/fonts.scss',
    '~/assets/scss/styles.scss',
    '~/assets/scss/ui-kit.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  styleResources: {
    scss: ['~/assets/scss/vars.scss', '~/assets/scss/mixins.scss']
  },

  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/svg-sprite'
  ],
  svgSprite: {
    input: '~/assets/svg/'
  },

  serverMiddleware: {
    '/api': '~/../server'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: false,
    extractCSS: false
  }
}
