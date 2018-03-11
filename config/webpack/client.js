const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const globalConfig = require("config");

const commonWebpackConfig = require("./common");

const buildPaths = globalConfig.get("buildPaths");

const publicPath = globalConfig.get("publicPath");
const isDev = process.env.NODE_ENV === "development";

const localWebpackConfig = {
  mode: isDev ? "development" : "production",
  entry: {
    main: ["./src/client.tsx"]
  },
  output: {
    path: path.resolve(buildPaths.client),
    publicPath,
    filename: isDev ? "[name].bundle.js" : "[chunkhash].js",
    chunkFilename: isDev ? "[name].chunk.js" : "[chunkhash].js"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [] // don't remove
};

if (isDev) {
  localWebpackConfig.entry.main.unshift(
    `webpack-dev-server/client?http://localhost:${globalConfig.wdsPort}/`,
    "webpack/hot/dev-server"
  );
  localWebpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  localWebpackConfig.devServer = {
    publicPath,
    port: globalConfig.wdsPort,
    hot: true,
    overlay: true,
    proxy: {
      [`!**${publicPath}*`]: `http://localhost:${globalConfig.serverPort}`,
      proxyTimeout: 1000 * 60 * 3
    },
    quiet: true
  };
}

module.exports = merge(commonWebpackConfig, localWebpackConfig);
