const path = require("path");
module.exports = {
  publicRuntimeConfig: {
    staticFolder: "/static",
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
>>>>>>> f59c135861d3296e0b610c9ad9a836d710257831
};
