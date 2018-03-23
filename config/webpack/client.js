const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const globalConfig = require("config");
const { ReactLoadablePlugin } = require("react-loadable/webpack");

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
    filename: isDev ? "[name].bundle.js" : "[name].[chunkhash].js",
    chunkFilename: isDev ? "[name].chunk.js" : "[name].[chunkhash].js"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: "./src/server/routes/SSR/react-loadable.json"
    })
  ]
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
      proxyTimeout: 1000 * 60 * 5
    },
    quiet: true
  };
}

module.exports = merge(commonWebpackConfig, localWebpackConfig);
