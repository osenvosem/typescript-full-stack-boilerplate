import express from "express";
import webpack from "webpack";
import WDM from "webpack-dev-middleware";
import WHM from "webpack-hot-middleware";
import webpackConfig from "../../webpack.dev";
import SSRHandler from "./ssrHandler";

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use("/assets/", express.static("dist"));
}

app.use(SSRHandler);

app.listen(3001);
