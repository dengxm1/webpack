var path = require('path');
const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');

const devConfig = {
    mode:'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "bundle"),
        port: 9999
    },
    optimization: {
        usedExports: true
    }
};
module.exports =merge(commonConfig, devConfig)