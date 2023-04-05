const path = require("path");
module.exports = {
  publicRuntimeConfig: {
    staticFolder: "/static",
    distDir: "build",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://fake-coffee-brand-api.vercel.app/:path*",
      },
      {
        source: "/static/:path*",
        destination: "/fake-coffee-brand-api/static/:path*",
      },
    ];
  },
};
