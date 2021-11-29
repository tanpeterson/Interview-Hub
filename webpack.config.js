const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { node } = require("prop-types");
const dotenv = require('dotenv');
dotenv.config();
console.log('your node env variable', process.env.NODE_ENV)
module.exports = {

    entry: path.resolve(__dirname, "./src/index.jsx"),
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js"
    },

    mode: process.env.NODE_ENV, // process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //jsx?
                exclude: /node_modules/,
                use:  {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.(sass|css|scss)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    {
                    // Run postcss actions
                    loader: "postcss-loader",
                    options: {
                      // `postcssOptions` is needed for postcss 8.x;
                      // if you use postcss 7.x skip the key
                      postcssOptions: {
                        // postcss plugins, can be exported to postcss.config.js
                        plugins: () => [require("autoprefixer")()]
                       },
                      }
                     },
                  'sass-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ["file-loader"],
              },
        
            {
                test: /\.svg$/,
                use: [
                        {
                            loader: 'svg-url-loader',
                            options: {
                            limit: 10000,
                            },
                        },
                        ],
            }
        ],
    },

    plugins: [new HtmlWebpackPlugin({
        template: "./public/index.html",
    })],

    devServer: {
        historyApiFallback: true,
        proxy: {
            '/db/**': {
                target: 'http://localhost:3000',
                secure: false,
                changeOrigin: true
              },
        },
        port: 8080,
    },

}