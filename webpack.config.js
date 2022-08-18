const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', //production
    entry: {
        js: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]/ncModal[name].[name]',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: process.env.BLOG_TITLE ?? 'Home' ,
        //     style: '/css/tailwind.css',
        //     filename: 'index.html',
        //     template: 'src/index.html'
        // }),

        new HtmlWebpackPlugin({
            title: 'Modal' ,
            style: '/css/tailwind.css',
            filename: 'index.html',
            demodir: '/modal/demo.html',
            active: 'currentActive ',
            template: 'src/template/modal.html'
        }),

        new HtmlWebpackPlugin({
            title: 'Modal-Demo' ,
            style: '/css/tailwind.css',
            filename: 'modal/demo.html',
            template: 'src/template/modal-demo.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource'
            },
        ],
    }
}