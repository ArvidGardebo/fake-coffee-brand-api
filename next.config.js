const path = require("path");
module.exports = {
  publicRuntimeConfig: {
    distDir: "build",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
