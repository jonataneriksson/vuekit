module.exports = {
  //Different assets location for production mode
  assetsDir: './assets/dist/',
  indexPath: './site/templates/default.php',

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
    config.entryPoints.delete('app');
    config.entry('app').add('./assets/entry.js').end();
    config.plugin('html').tap(args => {
      args[0].template =
        process.env.NODE_ENV === 'production'
          ? './assets/public/default.php'
          : './assets/public/index.html';
      args[0].processenv = process.env;
      return args;
    });
  }
};
