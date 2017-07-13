process.env.NODE_ENV = 'production';
var webpack = require('webpack');
var path = require("path");

module.exports = {
    //devtool: "source-map",
    entry: {
        "common2" : path.join(__dirname,'entry','common2.js')
    },
    output: {
        path: path.join(__dirname,'..','static','js'),
        filename: '[name].js',
        // sourceMapFilename: '/[name].map'
    },
    resolve: {
        alias:{

        },
        extensions: ['*', '*.js', '*.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query:{
                    env:'production'
                }
            }, {
                test: /\.scss/,
                loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap']
            }, {
                test: /\.(css)$/,
                loaders: ['style', 'css', 'resolve-url']
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                query:{
                    limit:10000,
                    name:'static/img/buildImg/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin('common.js'),
        //new webpack.LoaderOptionsPlugin({
            //options: {
                //sassLoader: {
                    //includePaths:path.join(__dirname, "scss")
                //}            
            //}
        //}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ],

};




