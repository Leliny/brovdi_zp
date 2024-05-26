module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/leliny.github.io/'
      : '/',
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      const flags = args[0] || {};
      flags['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = false;
      return [flags];
    });
  },
};
