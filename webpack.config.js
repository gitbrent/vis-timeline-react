var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/vis-timeline-react.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "vis-timeline-react.js",
    libraryTarget: "commonjs2"
  },
  devtool: "#eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|lib|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};
