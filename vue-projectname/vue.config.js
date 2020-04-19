module.exports = {
  //Different assets location for production mode
  outputDir: '../site/templates',
  assetsDir:
    process.env.NODE_ENV === 'production' ? '../../assets/dist/' : './dist/',
  indexPath: 'default.php',

  //Developement server
  devServer: {
    host: process.env.VUEHOST,
    port: 8080,
    https: false,
    proxy: process.env.LOCALPROXY
  },

  //Sourcemaps
  css: { sourceMap: true },

  //Webpack config
  chainWebpack: config => {
    config.plugins.delete('prefetch');
    config.optimization.merge({
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    });
    config.plugin('html').tap(args => {
      args[0].template =
        process.env.NODE_ENV === 'production'
          ? './public/default.php'
          : './public/index.html';
      args[0].processenv = process.env;
      return args;
    });
  }
};
