const nextConfig = {
    // Customizing the build output directory
    distDir: 'build',
  
    // Adding custom routes
    async rewrites() {
      return [
        {
          source: '/old-page',
          destination: '/new-page',
        },
      ];
    },
  
    // Enabling TypeScript support
    typescript: {
      // Enable type-checking during development
      ignoreBuildErrors: true,
    },
  
    // Modifying webpack configuration
    webpack(config, { dev, isServer }) {
      // Add a new webpack plugin
      if (dev && !isServer) {
        config.plugins.push(new MyCustomPlugin());
      }
  
      // Modify the webpack config
      // ...
  
      return config;
    },
  
    // Adding environment variables
    env: {
      MY_CUSTOM_VARIABLE: 'Hello, World!',
    },
  };
  
  module.exports = nextConfig;
  