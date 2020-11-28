const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


function resolve(dir) {
    return path.resolve(__dirname, dir)
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve('dist'),
        filename: '[name].js'
    },
    devServer: {
      contentBase: './dist',
        port: 8080,
        host: '0.0.0.0',
        overlay: {
          errors: true
        },
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
    ],
    module: {
        rules: [
            {
                rest: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|ipg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}