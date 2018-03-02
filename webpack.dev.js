const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const { output: { publicPath } } = commonConfig;

module.exports = merge(commonConfig, {
  mode: "development",
  entry: {
    main: [
      "webpack-dev-server/client?http://localhost:3000/",
      "webpack/hot/dev-server"
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    publicPath: publicPath,
    port: 3000,
    hot: true,
    overlay: true,
    proxy: {
      [`!**${publicPath}*`]: "http://localhost:3001"
    },
    noInfo: true
  }
});
