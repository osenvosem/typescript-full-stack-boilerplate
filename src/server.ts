import express from "express";
import webpack from "webpack";
import WDM from "webpack-dev-middleware";
import WHM from "webpack-hot-middleware";
import webpackConfig from "../webpack.dev";

const app = express();

if (process.env.NODE_ENV !== "development") {
  app.use(express.static("dist"));
} else {
  const compiler = webpack(webpackConfig);
  app.use(WDM(compiler, { publicPath: webpackConfig.output.publicPath }));
  app.use(WHM(compiler));
}

app.listen(3000);
