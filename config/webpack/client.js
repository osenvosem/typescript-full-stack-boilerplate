const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const ManifestPlugin = require("webpack-manifest-plugin");
const globalConfig = require("config");

const commonWebpackConfig = require("./common");

const buildPaths = globalConfig.get("buildPaths");

const publicPath = "/assets/";
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
  plugins: [
    new ManifestPlugin({
      writeToFileEmit: true,
      fileName: buildPaths.manifestFilename
    })
  ]
};

if (isDev) {
  localWebpackConfig.entry.main.unshift(
    "webpack-dev-server/client?http://localhost:3000/",
    "webpack/hot/dev-server"
  );
  localWebpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  localWebpackConfig.devServer = {
    publicPath,
    port: 3000,
    hot: true,
    overlay: true,
    proxy: {
      [`!**${publicPath}*`]: "http://localhost:3001"
    },
    quiet: true
  };
}

module.exports = merge(commonWebpackConfig, localWebpackConfig);
