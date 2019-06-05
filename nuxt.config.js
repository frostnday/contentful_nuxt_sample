import Articls from './static/json/article.json';
import outputStaticDataBeforeBuild from './modules/createStaticJson';

module.exports = {
  generate: {
    async routes() {
      // contentfulからデータを取得してjsonにexportする
      await outputStaticDataBeforeBuild();

      // 取得したjsonからページを動的生成する
      return Articls.items.map(i => {
        return `articles/${i.fields.id}`;
      });
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'contentful nuxt blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/scss/app.scss',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
}

