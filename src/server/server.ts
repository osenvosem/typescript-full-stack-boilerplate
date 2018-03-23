import express from "express";
import { SSR, todoApp } from "./routes/";

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use("/assets/", express.static("public"));
}

app.use(express.json());

app.use("/api/v1/todoapp", todoApp);
app.use(SSR);

export default app;
