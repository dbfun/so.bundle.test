const webpack = require("webpack");

const bundleConfig = {
  withCars: process.env.WITH_CARS === "1",
  withAdmins: process.env.WITH_ADMINS === "1"
};

module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: process.env.FILE_NAME,
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'webpack-conditional-loader'
        }
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      bundleConfig: JSON.stringify(bundleConfig)
    })
  ]
};
