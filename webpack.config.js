const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    // port: 8080,
    // historyApiFallback: true, 
    publicPath: "/build",
    proxy: {
      '/': 'http://localhost:3000/'
    },
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new Dotenv()
  ]
};
