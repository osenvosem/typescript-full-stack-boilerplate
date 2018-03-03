const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./common");

const publicPath = "/assets/";
const isDev = process.env.NODE_ENV === "development";

const config = {
  mode: isDev ? "development" : "production",
  entry: {
    main: ["./src/client.tsx"]
  },
  output: {
    path: path.resolve("public"),
    publicPath
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false
    }
  }
};

if (isDev) {
  config.entry.main.unshift(
    "webpack-dev-server/client?http://localhost:3000/",
    "webpack/hot/dev-server"
  );
  config.plugins = [new webpack.HotModuleReplacementPlugin()];
  config.devServer = {
    publicPath,
    port: 3000,
    hot: true,
    overlay: true,
    proxy: {
      [`!**${publicPath}*`]: "http://localhost:3001"
    },
    stats: {
      colors: true,
      errors: true,
      warnings: true,
      modules: false,
      version: false,
      hash: false,
      children: false,
      entrypoints: false,
      builtAt: false
    }
  };
}

module.exports = merge(commonConfig, config);
