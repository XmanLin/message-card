const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

const webpackProdConfig = {
    mode: 'production',

    entry: {
        app: [resolve('../src/component/index.tsx')],
    },

    output: {
        filename: 'message-card.js',
        path: resolve('../dist'),
        library: {
            type: 'commonjs2'
        }
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.less']
    },

    devtool: 'source-map',
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                parallel: 4,
                terserOptions: {
                    compress: {
                        drop_console: true
                    },
                },
            }),
            new OptimizeCSSAssetsPlugin()
        ],
    },
    plugins:[
        new CleanWebpackPlugin()
    ]
}

module.exports =merge(webpackBaseConfig, webpackProdConfig) 