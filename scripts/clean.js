const rimraf = require("rimraf");
const config = require("config");

const paths = config.get("buildPaths");

rimraf(`${paths.client}/*`, err => {
  if (err) console.error(err);
});

rimraf(`${paths.server}/*`, err => {
  if (err) console.error(err);
});
