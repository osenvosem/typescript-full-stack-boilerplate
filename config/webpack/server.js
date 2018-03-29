const path = require("path");
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const commonWebpackConfig = require("./common");
const globalConfig = require("config");

const isDev = process.env.NODE_ENV === "development";

const buildPaths = globalConfig.get("buildPaths");

const localWebpackConfig = {
  mode: isDev ? "development" : "production",
  entry: {
    server: path.resolve("./src/server/index.ts")
  },
  output: {
    path: path.resolve(buildPaths.server),
    filename: "[name].bundle.js"
  },
  devtool: "source-map",
  target: "node",
  externals: [nodeExternals()],
  watch: isDev,
  plugins: [] // don't remove
};

// don't emit files while server bundling
commonWebpackConfig.module.rules.forEach(rule => {
  if (rule.use.loader === "file-loader") rule.use.options.emitFile = false;
});

module.exports = merge(commonWebpackConfig, localWebpackConfig);
