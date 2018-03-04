module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: ["node_modules", "shared"]
  }
};
