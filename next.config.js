const path = require("path");
module.exports = {
  publicRuntimeConfig: {
    distDir: "build",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
