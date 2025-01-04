const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    module: {
        rules: [
            { test: /\.jfif$/, use: 'raw-loader' },
            { test: /\.jpg$/, use: 'raw-loader' },
            {
                test: /\.(jfif|jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'file-loader'
            },
        ],
    },
};