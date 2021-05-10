const TerserPlugin = require("terser-webpack-plugin");

// Webpack configuration
module.exports = {
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
