const path = require("path");
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const commonConfig = require("./common");

const isDev = process.env.NODE_ENV === "development";

const config = {
  mode: isDev ? "development" : "production",
  entry: {
    server: path.resolve("./src/server/index.ts")
  },
  output: {
    path: path.resolve("dist")
  },
  devtool: "source-map",
  target: "node",
  externals: [nodeExternals()],
  watch: isDev
};

if (isDev) {
  config.stats = {
    colors: true,
    errors: true,
    warnings: true,
    modules: false,
    version: false,
    hash: false,
    children: false,
    entrypoints: false,
    builtAt: false
  };
}

module.exports = merge(commonConfig, config);
