const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const port = 3000;
let publicUrl = `ws://localhost:${port}/ws`;

// Only for Gitpod
if (process.env.GITPOD_WORKSPACE_URL) {
  const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://');
  publicUrl = `wss://${port}-${host}/ws`;
}

// Only for Codespaces
if (process.env.CODESPACE_NAME) {
  publicUrl = `wss://${process.env.CODESPACE_NAME}-${port}.app.github.dev/ws`;
}

module.exports = {
  entry: './src/js/index.js', // Ajustado para ser más directo
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Simplificado
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // Puedes usar un array directamente
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        use: ['file-loader'] // Puedes combinar este bloque con el anterior
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Solo necesitarás esto
  },
  devtool: 'source-map',
  devServer: {
    port,
    hot: true,
    allowedHosts: 'all',
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'public'), // Ajustado para usar 'public'
    },
    client: {
      webSocketURL: publicUrl
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new ESLintPlugin({
    //   files: path.resolve(__dirname, "src"),
    // }),
    new HtmlWebpackPlugin({
      favicon: '4geeks.ico',
      template: '.index.html',// Asegúrate de que este archivo esté en 'public'
    }),
  ]
};
