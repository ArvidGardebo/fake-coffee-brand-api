const path = require("path");
module.exports = {
  publicRuntimeConfig: {
    // staticFolder: "/static",
    distDir: "build",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

<<<<<<< HEAD
  //   async rewrites() {
  //     return [
  //       {
  //         source: "/static/:path*",
  //         destination: "/fake-coffee-brand-api/static/:path*",
  //       },
  //     ];
  //   },
=======
  async rewrites() {
    return [
      {
        source: "/static/:path*",
        destination: "/fake-coffee-brand-api/static/:path*",
      },
    ];
  },
>>>>>>> 7a64bc9710a4a1d6a82361a9ea6473e7089f4235
};
