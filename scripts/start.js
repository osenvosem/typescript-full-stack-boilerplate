const { spawn } = require("child_process");
const webpack = require("webpack");
const WDS = require("webpack-dev-server");
const weblog = require("webpack-log");

const clientConfig = require("../config/webpack/client");
const serverConfig = require("../config/webpack/server");

// Frontend

const server = new WDS(webpack(clientConfig), clientConfig.devServer);

server.listen(3000);

// Backend

const compiler = webpack(serverConfig);

const log = weblog({ name: "server bundle" });

let nodemonCP = null;

const watching = compiler.watch(null, (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }

  log.info(stats.toString(serverConfig.stats), "\n");

  // run the server bundle

  const serverFilename = Object.keys(stats.compilation.assets).filter(
    filename => /\.js$/.test(filename)
  )[0];

  if (typeof serverFilename === "undefined") {
    throw new Error("Faild to get compiled server file name.");
  }

  if (!nodemonCP) {
    nodemonCP = spawn(
      "node_modules/.bin/nodemon",
      ["-q", `dist/${serverFilename}`],
      {
        stdio: "inherit"
      }
    );
  }
});

process.on("exit", () => {
  nodemonCP.kill();
  watching.close();
});
