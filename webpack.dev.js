const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  entry: {
    vendor: ["webpack-hot-middleware/client?reload=true&noInfo=true"]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: "cheap-module-source-map"
});
