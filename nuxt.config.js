export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'personal-project',
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
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts',
    ['@nuxtjs/fontawesome', {
      icons: {
        solid: ['faHeart'],
        brands: ['faGithub', 'faLinkedin', 'faMedium', 'faInstagram']
      },
      component: 'fa',
      suffix: true
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
  ],
  googleFonts: {
    families: {
      'Readex+Pro': [400, 500, 700],
      'Signika+Negative': [400, 500, 700],
    },
    download: true,
    overwriting: false,
    display: 'swap'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
