const path = require("path");
const fs = require("fs");
const cp = require("child_process");
const webpack = require("webpack");
const WDS = require("webpack-dev-server");
const globalConfig = require("config");
const formatWebpackMessages = require("react-dev-utils/formatWebpackMessages");
const clearConsole = require("react-dev-utils/clearConsole");
const chalk = require("chalk");

const buildPaths = globalConfig.get("buildPaths");
const clientConfig = require("../config/webpack/client");
const serverConfig = require("../config/webpack/server");

const WAIT = chalk`{bgBlue.black  WAIT } {blue Compilation...}`;
const DONE = chalk`{bgGreen.black  DONE } {green Compiled successfully}`;
const ERROR = chalk`{bgRed.black  ERROR }`;
const WARNING = chalk`{bgYellow.black  WARNING }`;

// thereWasAnError is used to not show server DONE message if there was a client error printed
const compilationMessages = {
  client: { errors: [], warnings: [], thereWasAnError: false },
  server: { errors: [], warnings: [] }
};
// is used to not print errors if there is a compilation in progress
const compilationInProgress = { client: false, server: false };

// UTILS

const printErrors = rawErrors => {
  const errors = rawErrors.filter(
    (err, idx, arr) => !arr.includes(err, idx + 1)
  );
  clearConsole();
  console.log(
    ERROR,
    chalk`{red Compilation failed with ${
      errors.length > 1 ? `${errors.length} errors` : `an error`
    }\n}`
  );
  errors.forEach(err => console.log(err));
};

const printWarnings = rawWarnings => {
  const warnings = rawWarnings.filter(
    (warn, idx, arr) => !arr.includes(warn, idx + 1)
  );
  clearConsole();
  console.log(
    WARNING,
    chalk`{yellow Client compilation completed with ${
      warnings.length > 1 ? `${warnings.length} warnings` : `a warning`
    }\n}`
  );
  warnings.forEach(err => console.log(err));
};

// CLIENT

const clientCompiler = webpack(clientConfig);

compilationInProgress.client = true;

clientCompiler.plugin("invalid", function() {
  compilationInProgress.client = true;
  clearConsole();
  console.log(WAIT);
});

clientCompiler.plugin("done", stats => {
  compilationInProgress.client = false;

  compilationMessages.client = formatWebpackMessages(stats.toJson({}, true));

  if (stats.hasErrors() || stats.hasWarnings()) {
    if (compilationInProgress.server) return;
    compilationMessages.client.thereWasAnError = true;

    if (stats.hasErrors()) {
      printErrors([
        ...compilationMessages.client.errors,
        ...compilationMessages.server.errors
      ]);
      compilationMessages.client.errors = compilationMessages.server.errors = [];
    }

    if (stats.hasWarnings()) {
      printWarnings([
        ...compilationMessages.client.warnings,
        ...compilationMessages.server.warnings
      ]);
      compilationMessages.client.warnings = compilationMessages.server.warnings = [];
    }

    return;
  }

  clearConsole();
  console.log(DONE);
});

new WDS(clientCompiler, clientConfig.devServer).listen(3000);

// SERVER

// wait for the manifest.json file is emmited by the client webpack and then run the server compilation. The server uses the file to get bundle urls for rendering HTML markup
const manifestWatcher = fs.watch(buildPaths.client, (eventType, filename) => {
  if (eventType !== "change" && filename !== buildPaths.manifestFilename) {
    return;
  }

  manifestWatcher.close();

  // move the manifest.json file to a new location, closer to a file that imports it
  const manifestOldPath = `${buildPaths.client}/${buildPaths.manifestFilename}`;
  const manifestNewPath = `${buildPaths.manifestFinalPath}/${
    buildPaths.manifestFilename
  }`;

  fs.rename(manifestOldPath, manifestNewPath, err => {
    if (err) console.error(err);

    const serverCompiler = webpack(serverConfig);
    let nodemonCP = null;

    serverCompiler.plugin("invalid", () => {
      compilationInProgress.server = true;
      clearConsole();
      console.log(WAIT);
    });

    // a hack for a well known issue when webpack is rebuilding the bundle for several times if a file was created right before webpack started in watch mode: https://github.com/webpack/watchpack/issues/25
    const timefix = 11000;
    serverCompiler.plugin("done", stats => {
      stats.startTime -= timefix;
    });

    const serverWebpackWatcher = serverCompiler.watch(null, (err, stats) => {
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        return;
      }

      // also relates to the rebuilding hack
      serverWebpackWatcher.startTime += timefix;

      compilationInProgress.server = false;

      compilationMessages.server = formatWebpackMessages(
        stats.toJson({}, true)
      );

      if (stats.hasErrors() || stats.hasWarnings()) {
        if (compilationInProgress.client) return;

        if (stats.hasErrors()) {
          printErrors([
            ...compilationMessages.client.errors,
            ...compilationMessages.server.errors
          ]);
          compilationMessages.client.errors = compilationMessages.server.errors = [];
        }

        if (stats.hasWarnings()) {
          printWarnings([
            ...compilationMessages.client.warnings,
            ...compilationMessages.server.warnings
          ]);
          compilationMessages.client.warnings = compilationMessages.server.warnings = [];
        }

        return;
      }

      // if there were client errors printed do not clear the console
      if (!compilationMessages.client.thereWasAnError) {
        clearConsole();
        console.log(DONE);
      }
      compilationMessages.client.thereWasAnError = false;

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
            stdio: "ignore"
          }
        );
      }
    });
  });
});
