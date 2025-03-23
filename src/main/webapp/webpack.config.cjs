const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: "development",
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    libraryTarget: 'amd', 
    publicPath: '/'
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
          { from: 'src/require.config.js', to: 'require.config.js' } 
      ]
  })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 8084,
    historyApiFallback: true
  },
  devtool: 'eval-source-map'
};