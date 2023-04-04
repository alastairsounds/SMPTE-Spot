const path = require('path');
// tells our bundled js file to be injected into our index.html file
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 'entry' tells webpack which file to use to create a dependency graph
  entry: './src/index.js',
  // 'output' tells webpack where to put the output file that is generated
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // this is where we specify the presets we want to use
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
