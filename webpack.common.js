const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    vendor: ["react", "react-dom"],
    main: "./src/index.ts"
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "Learning React" }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ["common", "vendor"],
      minChunks: 2
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  }
};
