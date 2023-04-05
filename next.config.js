const path = require("path");
module.exports = {
  publicRuntimeConfig: {
    // staticFolder: "/static",
    distDir: "build",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  async rewrites() {
    return [
      {
        source: "/api/:id",
        destination: "https://fake-coffee-brand-api/api/:id",
      },
    ];
  },
};
