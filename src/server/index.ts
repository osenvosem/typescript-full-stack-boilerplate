import "babel-polyfill";
import config from "config";
import app from "./server";

app.listen(config.get("serverPort"));
