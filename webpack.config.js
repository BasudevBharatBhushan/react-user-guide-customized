const path = require("path");

module.exports = {
  entry: "./src/index.js", // Replace with the correct entry point for your app
  output: {
    path: path.resolve(__dirname, "dist"), // Replace with the desired output directory
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
          plugins: ["@babel/plugin-transform-modules-commonjs"],
        },
      },
    ],
  },
  // Add any other Webpack configurations you need
};
