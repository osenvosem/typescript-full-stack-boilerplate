import express from "express";
import SSRHandler from "./ssrHandler";

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use("/assets/", express.static("public"));
}

app.use(SSRHandler);

export default app;