const path = require("path");

module.exports = {
  entry: {
    vendor: ["react", "react-dom", "react-router-dom"],
    main: ["./src/client.tsx"]
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].bundle.js",
    publicPath: "/assets/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              module: true,
              camelCase: true,
              localIdentName: "[folder]__[local]--[hash:6]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: ["node_modules", "shared"]
  }
};
