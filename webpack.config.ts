import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const config: Array<webpack.Configuration> = [
  {
    mode: 'development',
    name: 'dev',
    entry: path.join(__dirname, 'src/index.tsx'),
    devServer: {
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.(ts)x?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.(ts)x?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public/index.html'),
      }),
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'dist-dev.js',
    },
  },
  {
    mode: 'production',
    name: 'prod',
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'dist-prod.js',
    },
  },
];

export default config;
