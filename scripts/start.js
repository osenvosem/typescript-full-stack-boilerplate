const path = require("path");
const fs = require("fs");
const cp = require("child_process");
const webpack = require("webpack");
const WDS = require("webpack-dev-server");
const weblog = require("webpack-log");

const clientConfig = require("../config/webpack/client");
const serverConfig = require("../config/webpack/server");

const globalConfig = require("config");
const buildPaths = globalConfig.get("buildPaths");

// Frontend

new WDS(webpack(clientConfig), clientConfig.devServer).listen(3000);

// Backend

const manifestWatcher = fs.watch(buildPaths.client, (eventType, filename) => {
  if (eventType !== "change" && filename !== buildPaths.manifestFilename) {
    return;
  }

  manifestWatcher.close();

  const manifestOldPath = `${buildPaths.client}/${buildPaths.manifestFilename}`;
  const manifestNewPath = `${buildPaths.manifestFinalPath}`;

  fs.rename(manifestOldPath, manifestNewPath, err => {
    if (err) console.error(err);

    const compiler = webpack(serverConfig);

    const log = weblog({ name: "server bundle" });

    let nodemonCP = null;

    const serverWebpackWatcher = compiler.watch({}, (err, stats) => {
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

      // get the server bundle name
      const serverFilename = Object.keys(stats.compilation.assets).filter(
        filename => /\.js$/.test(filename)
      )[0];

      if (typeof serverFilename === "undefined") {
        throw new Error("Faild to get server bundle name.");
      }

      if (!nodemonCP) {
        nodemonCP = cp.spawn(
          "node_modules/.bin/nodemon",
          ["-q", `${buildPaths.server}/${serverFilename}`],
          {
            stdio: "inherit"
          }
        );
      }
    });
  });
});
