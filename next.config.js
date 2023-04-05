const path = require("path");
module.exports = {
  publicRuntimeConfig: {
    staticFolder: "/static",
    distDir: "build",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  //   async rewrites() {
  //     return [
  //       {
  //         source: "/static/:path*",
  //         destination: "/fake-coffee-brand-api/static/:path*",
  //       },
  //     ];
  //   },
};
