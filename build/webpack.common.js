var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main:'./src/index.js',
        room: './src/room.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../bundle'),
        filename: '[name].js'
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html'
        }
    ),
        new CleanWebpackPlugin()
    ]
};