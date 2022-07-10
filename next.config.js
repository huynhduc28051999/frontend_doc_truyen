const path = require('path');

module.exports = () => {
  const localeSubpaths = {};

  const sassOptions = {
    includePaths: [path.join(__dirname, 'assets/scss')],
  };

  const devIndicators = {
    autoPrerender: false,
  };

  const publicRuntimeConfig = {
    localeSubpaths,
  };

  const pageExtensions = ['page.tsx', 'page.ts', 'page.jsx', 'page.js'];

  const webpack = cfg => {
    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js'] && !entries['main.js'].includes('./client/polyfills.js')) {
        entries['main.js'].unshift('./client/polyfills.js');
      }
      return entries;
    };

    return cfg;
  };

  return {
    publicRuntimeConfig,
    sassOptions,
    devIndicators,
    webpack,
    pageExtensions,
    swcMinify: true,
    images: {
      disableStaticImages: true,
    },
  };
};
