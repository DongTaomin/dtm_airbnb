const path = require("path");

const resolve = (path1) => {
  return path.resolve(__dirname, path1);
};

module.exports = {
  // webpack
  webpack: {
    alias: {
      "@": resolve("src"),
    },
  },
};
