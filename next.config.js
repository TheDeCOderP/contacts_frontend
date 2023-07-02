const path = require('path');

module.exports = {
  distDir: 'build',
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add any custom webpack configurations here

    return config;
  },
};