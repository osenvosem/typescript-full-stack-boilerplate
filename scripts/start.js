const path = require("path");
const fs = require("fs");
const cp = require("child_process");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const globalConfig = require("config");
const formatWebpackMessages = require("react-dev-utils/formatWebpackMessages");
const clearConsole = require("react-dev-utils/clearConsole");
const chalk = require("chalk");
const nodemon = require("nodemon");

const buildPaths = globalConfig.get("buildPaths");
const publicPath = globalConfig.get("publicPath");
const clientConfig = require("../config/webpack/client");
const serverConfig = require("../config/webpack/server");

let clientCompilationMessages = { errors: [], warnings: [] };
let serverCompilationMessages = { errors: [], warnings: [] };
let serverCompilationErrorHappened = false;

let serverWebpackWatcher = null;
let nodemonProcess = null;

/* UTILS */

const printWait = side => {
  if (typeof side !== "string")
    throw new Error(
      `The first argument must be a string, ${typeof side} given`
    );

  console.log(
    chalk`{bgBlue.black  ${side.toUpperCase()} } {blue compilation...}`
  );
};

const printDone = side => {
  if (typeof side !== "string")
    throw new Error(
      `The first argument must be a string, ${typeof side} given`
    );

  console.log(
    chalk`{bgGreen.black  ${side.toUpperCase()} } {green compiled successfully}`
  );
};

const printErrors = (side, errors) => {
  if (typeof side !== "string")
    throw new Error(
      `The first argument must be a string, ${typeof side} given`
    );

  if (!Array.isArray(errors))
    throw new Error(
      `The second argument must be an array, ${typeof errors} given`
    );

  console.log(
    chalk`{bgRed.black  ${side.toUpperCase()} } {red failed with ${
      errors.length > 1 ? `${errors.length} errors` : `an error`
    }\n}`
  );
  errors.forEach(err => console.log(err));
};

const printWarnings = (side, warnings) => {
  if (typeof side !== "string")
    throw new Error(
      `The first argument must be a string, ${typeof side} given`
    );

  if (!Array.isArray(warnings))
    throw new Error(
      `The second argument must be an array, ${typeof warnings} given`
    );

  console.log(
    chalk`{bgYellow.black  ${side.toUpperCase()} } {yellow completed with ${
      warnings.length > 1 ? `${warnings.length} warnings` : `a warning`
    }\n}`
  );
  warnings.forEach(err => console.log(err));
};

/* CLIENT */

const clientCompiler = webpack(clientConfig);

clientCompiler.hooks.invalid.tap({ name: "invalid" }, () => {
  printWait("client");
});

clientCompiler.hooks.done.tap({ name: "done" }, clientStats => {
  const clientInfo = clientStats.toJson({}, true);

  clientCompilationMessages = formatWebpackMessages(clientInfo);

  const clientAssets = clientInfo.assets.map(
    assetObj => `${publicPath}${assetObj.name}`
  );

  if (clientStats.hasErrors() || clientStats.hasWarnings()) {
    if (clientStats.hasErrors()) {
      printErrors("client compilation", clientCompilationMessages.errors);
      clientCompilationMessages.errors = [];
    }

    if (clientStats.hasWarnings()) {
      printWarnings("client compilation", clientCompilationMessages.warnings);
      clientCompilationMessages.warnings = [];
    }
  } else {
    printDone("client");
  }

  if (serverWebpackWatcher === null) {
    /* SERVER */

    serverConfig.plugins.push(
      new webpack.DefinePlugin({
        CLIENT_ASSETS: JSON.stringify(JSON.stringify(clientAssets))
      })
    );

    const serverCompiler = webpack(serverConfig);

    serverCompiler.hooks.invalid.tap({ name: "invalid" }, () => {
      printWait("server");
    });

    serverWebpackWatcher = serverCompiler.watch(null, (err, serverStats) => {
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        return;
      }

      const serverInfo = serverStats.toJson({}, true);

      serverCompilationMessages = formatWebpackMessages(serverInfo);

      if (serverStats.hasErrors() || serverStats.hasWarnings()) {
        if (serverStats.hasErrors()) {
          clearConsole();
          printErrors("server compilation", serverCompilationMessages.errors);
          serverCompilationMessages.errors = [];
          serverCompilationErrorHappened = true;
          return;
        }

        if (serverStats.hasWarnings()) {
          printWarnings(
            "server compilation",
            serverCompilationMessages.warnings
          );
          serverCompilationMessages.warnings = [];
        }
      } else {
        serverCompilationErrorHappened = false;
        printDone("server");
      }

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
          script: `${buildPaths.server}/${serverFilename}`,
          stdout: false
        });
        nodemonProcess.on("readable", function() {
          this.stdout.pipe(process.stdout);

          this.stderr.on("data", data => {
            if (serverCompilationErrorHappened) return;
            printErrors("server runtime", [data.toString()]);
          });
        });
      }
    });
  }
});

const devServer = new WebpackDevServer(clientCompiler, clientConfig.devServer);
devServer.listen(globalConfig.get("wdsPort"), null, err => {
  if (err) return console.error(err);
});

["SIGINT", "SIGTERM"].forEach(sig => {
  process.on(sig, () => {
    process.exit();
    devServer.close();
  });
});
