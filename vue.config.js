const TerserPlugin = require('terser-webpack-plugin')
const IS_DEV = process.env.NODE_ENV !== 'production'
const SERVER = (webpackConfig) => {
  webpackConfig.plugin('html').tap(([options]) => [
    Object.assign(options, {
      minify: false,
      inject: true,
      chunksSortMode: 'none'
    })
  ])
}
const BUILD = (webpackConfig) => {
  webpackConfig.plugin('html').tap(([options]) => [
    Object.assign(options, {
      minify: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        collapseInlineTagWhitespace: true,
        collapseBooleanAttributes: true,
        removeRedundantAttributes: true,
        removeAttributeQuotes: false,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true
      },
      inject: true,
      chunksSortMode: 'none'
    })
  ])
}

module.exports = {
  publicPath: IS_DEV ? '/' : process.env.VUE_APP_PUBLICPATH,
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: IS_DEV,
  integrity: false,
  css: {
    extract: false,
    sourceMap: IS_DEV,
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  // devServer: {
  //   open: true,
  //   port: 8888,
  //   proxy: null
  // },
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log']
            }
          }
        })
      ]
    },
    externals: {
      'vue-router': 'VueRouter',
      'vue-i18n': 'VueI18n',
      vue: 'Vue',
      vuex: 'Vuex',
      axios: 'axios'
    }
  },
  transpileDependencies: ['vuetify'],
  chainWebpack: (webpackConfig) => {
    IS_DEV ? SERVER(webpackConfig) : BUILD(webpackConfig)
  }
}
