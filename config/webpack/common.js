const globalConfig = require("config");
const publicPath = globalConfig.get("publicPath");

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader"
      },
      {
        test: /.(woff2?|ttf|eot|svg)/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: publicPath + "fonts/",
            outputPath: "fonts/"
          }
        }
      },
      {
        test: /.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: publicPath + "images/",
            outputPath: "images/"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: ["node_modules", "shared"]
  }
};
