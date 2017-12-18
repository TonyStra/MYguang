const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');
const cleanWebpackPlugin=require('clean-webpack--plugin');

module.exports={
    entry:path.resolve(__dirname,'./src/js/main.js'),
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle_[chunkhash:8].js'
    },
    plugins:[
        new htmlWebpackPlugin({
                template:'./src/index.html',
                filename:'index.html',
                inject:'body',
        }),
        new cleanWebpackPlugin(['./dist'])
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(png|jpg|gif|jpeg|svg)$/,
                use:[{loader:'url-loader',options:{limit:10240}}]
            },
            {
                test:/\.js$/,
                use:['babel-loader'],
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    devServer:{
        contentBase:'dist',
        port:7777,
        open:true,
        inline:true,
        progress:true
    }
};