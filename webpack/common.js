const HtmlPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../app/src/index.js'),
    output: {
        hashFunction: 'xxhash64',
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../public')
    },
    plugins: [
        new CssPlugin({
            filename: "bundle.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [CssPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
}