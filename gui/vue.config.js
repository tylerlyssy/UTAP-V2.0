module.exports = {
  devServer: {
    proxy: 'http://nginx',
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  transpileDependencies: [
    'vuetify'
  ]
}
