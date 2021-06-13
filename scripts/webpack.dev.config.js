const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

const webpackDevConfig = {
    mode: 'development',
    
    entry: {
        app: resolve('../src/index.tsx')
    },

    output: {
        path: resolve('../dist'),
        filename: 'message-card.js',
    },

    devtool: 'eval-cheap-module-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.less']
    },
    devServer: {
        contentBase: resolve('../dist'),
        hot: true,
        open: true,
        host: 'localhost',
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'}),
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(webpackBaseConfig, webpackDevConfig) 