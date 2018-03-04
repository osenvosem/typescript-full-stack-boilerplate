const { deferConfig } = require("config/defer");

const manifestFilename = "manifest.json";

const config = {
  buildPaths: {
    client: "public",
    server: "build",
    manifestFilename,
    manifestFinalPath: `src/server/routes/SSR/${manifestFilename}`
  }
};

module.exports = config;
