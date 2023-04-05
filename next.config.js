const path = require("path");
module.exports = {
  publicRuntimeConfig: {
    staticFolder: "/static",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  experimental: {
    nftTracing: true,
  },
  async rewrites() {
    return [
      {
        source: "/static/:path*",
        destination: `${process.env.NEXT_PUBLIC_STATIC_FOLDER}/:path*`,
      },
    ];
  },
};
