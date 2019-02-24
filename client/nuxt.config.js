const fs = require('fs')
const path = require('path')
const axios = require('axios')
const pkg = require('./package')

async function getBase64(url) {
  const response = await axios.get(url, { responseType: 'arraybuffer' })
  return Buffer.from(response.data, 'binary').toString('base64')
}

module.exports = {
  mode: 'universal',
  env: {
    serverUrl: process.env.API_URL || 'http://localhost:1337'
  },
  generate: {
    routes: function () {
      return axios.get('http://localhost:1337/galleries')
        .then((res) => {
          return res.data.map((gallery) => {
            for (let i = 0; i < gallery.photos.length; i++) {
              const data = gallery.photos[i]
              const url = `http://localhost:1337${data.url}`
              getBase64(url).then((res) => {
                const newPath = path.join(__dirname, `static${data.url.replace('/uploads', '')}`)
                fs.writeFileSync(newPath, res, 'base64')
              })
            }

            return {
              route: '/seeimage/' + gallery.id,
              payload: gallery
            }
          })
        })
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kavivanar|Roboto' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: process.env.API_URL || 'http://localhost:1337'
  },

  bootstrapVue: {
    bootstrapCSS: true, // or `css`
    bootstrapVueCSS: true // or `bvCSS`
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
