'use strict';

var webpack = require('webpack');
var path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'

    },
    context: __dirname,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            { test: /\.(png|jpg)$/,
              loader: 'url-loader?limit=250000000' }
        ]
    },
    resolve: {
        extensions: ['.js', '.json']
    }
};
