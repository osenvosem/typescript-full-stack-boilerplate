const webpack = require("webpack");
const fs = require("fs");
const chalk = require("chalk");
const formatWebpackMessages = require("react-dev-utils/formatWebpackMessages");
const clearConsole = require("react-dev-utils/clearConsole");
const config = require("config");

const clientConfig = require("../config/webpack/client");
const serverConfig = require("../config/webpack/server");

const WAIT = chalk`{bgBlue.black  WAIT } {blue Compilation...}`;
const DONE = chalk`{bgGreen.black  DONE }`;
const ERROR = chalk`{bgRed.black  ERROR }`;
const WARNING = chalk`{bgYellow.black  WARNING }`;

const publicPath = config.get("publicPath");

const capitalize = str => {
  str = str.trim();
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const printErrors = (side, errors) => {
  clearConsole();
  console.log(
    ERROR,
    chalk`{red ${capitalize(side)} compilation failed with ${
      errors.length > 1 ? `${errors.length} errors` : `an error`
    }\n}`
  );
  errors.forEach(err => console.log(err));
};

const printWarnings = (side, warnings) => {
  clearConsole();
  console.log(
    WARNING,
    chalk`{yellow ${capitalize(side)} compilation completed with ${
      warnings.length > 1 ? `${warnings.length} warnings` : `a warning`
    }\n}`
  );
  warnings.forEach(err => console.log(err));
};

/* CLIENT */

webpack(clientConfig, (err, clientStats) => {
  if (err) {
    clearConsole();
    console.log(ERROR);
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const clientInfo = clientStats.toJson({}, true);

  if (clientStats.hasErrors()) {
    printErrors("client", formatWebpackMessages(clientInfo).errors);
    return;
  }

  if (clientStats.hasWarnings()) {
    printWarnings("client", formatWebpackMessages(clientInfo).warnings);
  }

  const clientAssets = clientInfo.assets.map(assetObj => {
    return `${publicPath}${assetObj.name}`;
  });

  console.log(
    DONE,
    chalk`{green The client production bundle compiled successfully.}`
  );

  /* SERVER */

  serverConfig.plugins.push(
    new webpack.DefinePlugin({
      CLIENT_ASSETS: JSON.stringify(JSON.stringify(clientAssets))
    })
  );

  const serverCompiler = webpack(serverConfig, (err, serverStats) => {
    if (err) {
      clearConsole();
      console.log(ERROR);
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      return;
    }

    const serverInfo = serverStats.toJson({}, true);

    if (serverStats.hasErrors()) {
      printErrors("server", formatWebpackMessages(serverInfo).errors);
      return;
    }

    if (serverStats.hasWarnings()) {
      printWarnings("server", formatWebpackMessages(serverInfo).warnings);
    }

    console.log(
      DONE,
      chalk`{green The server production bundle compiled successfully.}`
    );
  });
});
