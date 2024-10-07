const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  chainWebpack: config => {
    config.plugin('copy').tap(([options]) => {
      options.patterns.push({
        from: 'public/posts',
        to: 'posts'
      })
      return [options]
    })
  }
})
