const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  webpack: (config, { webpack, isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.node = { ...config.node };

    config.plugins = [
      ...config.plugins,
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "node_modules/@ffmpeg/core/dist"),
            to: path.resolve(__dirname, "public/libs/ffmpeg"),
            force: true,
          },
        ],
      }),
    ];
    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
        ],
      },
    ];
  }
};
