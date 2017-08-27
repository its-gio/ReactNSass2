const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpack = require('html-webpack-plugin');
var HtmlWebpackConfig = new HtmlWebpack({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  minify: {
    collapseWhitespace: true,
  },
  inject: 'body'
})

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: __dirname + "/dist/",
    filename: "app.min.js"
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
          publicPath: "/dist"
        })
      }
    ]
  },
  plugins: [
    HtmlWebpackConfig,
    new ExtractTextPlugin({
      filename: "styles.css",
      allChunks: true,
      disable: false
    })
  ]
}
