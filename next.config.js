module.exports = {
 
  
  // Add any other Next.js configurations you need
  // For example, if you use CSS modules:
  webpack(config) {
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true
          }
        }
      ]
    })

    return config
  }
}
