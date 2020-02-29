const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/app.jsx',//入口
    output: {
        path: path.resolve(__dirname, 'dist'),
        //+++
        publicPath: '/dist/',
        filename: 'js/app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            // css文件的处理
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // sass文件的处理
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            //图片配置
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        },
                    },
                ],
            },
            // 字体图标的配置
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'resource/[name].[ext]',
                            publicPath:'/fonts/',//打包到fonts文件夹
                            useRelativePath:true,//设置为相对路径
                            name:'[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        //处理html文件
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 独立css文件
        new ExtractTextPlugin("css/[name].css"),
        //提出公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename: 'js/base.js'
        })
    ],
    devServer: {
        contentBase: './dist'
　　　　　　//修改端口号
// 　　　　　　port: 8086


    },
};