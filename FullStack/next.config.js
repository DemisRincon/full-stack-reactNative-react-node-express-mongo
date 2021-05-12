const TerserPlugin = require("terser-webpack-plugin");
const path = require('path')
// Webpack configuration
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            safari10: true,
          },
        }),
      ];
    }

    return config;
  },
};
