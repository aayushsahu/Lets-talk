import path from 'path';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default {
  target: 'node',
  entry: './app.js', // Specify the entry point of your application
  output: {
    filename: 'main.js', // Output bundled file
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  externalsPresets: {
    node: true // in order to ignore built-in modules like path, fs, etc.
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/, // Process JavaScript files
        use: {
          loader: 'babel-loader', // Use Babel to transpile JS (you'll need to install Babel)
          options: { babelrc: true }
        }
      }
    ]
  },
  mode: 'development' // Set to 'production' for production builds
};
