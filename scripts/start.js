const path = require("path");
const fs = require("fs");
const cp = require("child_process");
const webpack = require("webpack");
const WDS = require("webpack-dev-server");
const globalConfig = require("config");
const formatWebpackMessages = require("react-dev-utils/formatWebpackMessages");
const clearConsole = require("react-dev-utils/clearConsole");
const chalk = require("chalk");
const nodemon = require("nodemon");

const buildPaths = globalConfig.get("buildPaths");
const publicPath = globalConfig.get("publicPath");
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
let serverIsBeingWatched = false;
let nodemonProcess = null;
// `false` to disable clearing console
const CC = true;

/* UTILS */

const printErrors = rawErrors => {
  const errors = rawErrors.filter(
    (err, idx, arr) => !arr.includes(err, idx + 1)
  );
  if (CC) clearConsole();
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
  if (CC) clearConsole();
  console.log(
    WARNING,
    chalk`{yellow Compilation completed with ${
      warnings.length > 1 ? `${warnings.length} warnings` : `a warning`
    }\n}`
  );
  warnings.forEach(err => console.log(err));
};

/* CLIENT */

const clientCompiler = webpack(clientConfig);

compilationInProgress.client = true;

clientCompiler.plugin("invalid", function() {
  compilationInProgress.client = true;
  if (CC) clearConsole();
  console.log(WAIT);
});

clientCompiler.plugin("done", clientStats => {
  compilationInProgress.client = false;

  const clientInfo = clientStats.toJson({}, true);

  compilationMessages.client = formatWebpackMessages(clientInfo);

  const clientAssets = clientInfo.assets.map(
    assetObj => `${publicPath}${assetObj.name}`
  );

  if (clientStats.hasErrors() || clientStats.hasWarnings()) {
    if (compilationInProgress.server) return;
    compilationMessages.client.thereWasAnError = true;

    if (clientStats.hasErrors()) {
      printErrors([
        ...compilationMessages.client.errors,
        ...compilationMessages.server.errors
      ]);
      compilationMessages.client.errors = compilationMessages.server.errors = [];
    }

    if (clientStats.hasWarnings()) {
      printWarnings([
        ...compilationMessages.client.warnings,
        ...compilationMessages.server.warnings
      ]);
      compilationMessages.client.warnings = compilationMessages.server.warnings = [];
    }

    return;
  }

  if (CC) clearConsole();
  console.log(DONE);

  if (!serverIsBeingWatched) {
    /* SERVER */

    serverConfig.plugins.push(
      new webpack.DefinePlugin({
        CLIENT_ASSETS: JSON.stringify(JSON.stringify(clientAssets))
      })
    );

    const serverCompiler = webpack(serverConfig);

    serverCompiler.plugin("invalid", () => {
      compilationInProgress.server = true;
      if (CC) clearConsole();
      console.log(WAIT);
    });

    const serverWebpackWatcher = serverCompiler.watch(
      null,
      (err, serverStats) => {
        if (err) {
          console.error(err.stack || err);
          if (err.details) {
            console.error(err.details);
          }
          return;
        }

        compilationInProgress.server = false;
        serverIsBeingWatched = true;
        serverInfo = serverStats.toJson({}, true);

        compilationMessages.server = formatWebpackMessages(serverInfo);

        if (serverStats.hasErrors() || serverStats.hasWarnings()) {
          if (compilationInProgress.client) return;

          if (serverStats.hasErrors()) {
            printErrors([
              ...compilationMessages.client.errors,
              ...compilationMessages.server.errors
            ]);
            compilationMessages.client.errors = compilationMessages.server.errors = [];
          }

          if (serverStats.hasWarnings()) {
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
          if (CC) clearConsole();
          console.log(DONE);
        }
        compilationMessages.client.thereWasAnError = false;

        // run the server bundle

        // get the server bundle name
        const serverFilename = serverInfo.assets
          .map(assetObj => assetObj.name)
          .filter(filename => /\.js$/.test(filename))[0];

        if (typeof serverFilename === "undefined") {
          throw new Error("Failed to get server bundle name.");
        }

        if (!nodemonProcess) {
          nodemonProcess = nodemon({
            script: `${buildPaths.server}/${serverFilename}`
          });
        }
      }
    );
  }
});

new WDS(clientCompiler, clientConfig.devServer).listen(3000);

process.on("SIGINT", () => {
  process.exit();
  nodemonProcess.reset();
});
