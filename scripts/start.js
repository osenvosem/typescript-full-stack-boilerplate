const { exec } = require("child_process");
const webpack = require("webpack");
const WDS = require("webpack-dev-server");
const config = require("../webpack.dev");

const compiler = webpack(config);

const server = new WDS(compiler, config.devServer);

server.listen(3000);

// server
const command =
  "node_modules/.bin/nodemon --exec node_modules/.bin/babel-node src/server/index.ts --extensions '.ts','.tsx'";
const envVars = { NODE_ENV: "development" };

exec(command, envVars, (err, stdout, stderr) => {
  if (err) return console.error(err);
  if (stdout) console.log(stdout);
  if (stderr) console.log(stderr);
});
