const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../app/src/index.js'),
    output: {
        hashFunction: 'xxhash64',
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../public')
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve(__dirname, '../app/index.html'),
            favicon: path.resolve(__dirname, '../app/favicon.png')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
}