var path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MyPlugin = require('./src/plugins/my-plugin')
module.exports = {
    entry: {
      a:path.resolve(__dirname,'src/index.js'),
      b:path.resolve(__dirname,'src/index2.js')
    },
    output: {
      path: path.resolve(__dirname,'dist/'),
      filename: 'index-[name]-[chunkhash:5].js'
    },
    resolve:{
      extensions:['.ts','.js','.json'],
      modules:['./node_modules']
    },
    resolveLoader:{
      // 去哪些目录下寻找 Loader，有先后顺序之分
      modules: ['./src/loaders/','node_modules'],
    },
    module:{
      rules:[
        {
          test:/\.js$/,
          use:[
            {
              loader:'babel-loader'
            },
            {
              loader:'my-loader',
              options:{
                name:'evi'
              }
            }
          ],
          exclude: path.resolve(__dirname,"./node_modules"),
          include: path.resolve(__dirname, "./src")
        },
        {
          test: /\.ts$/,
          loader: 'ts-loader'
        },
        {
          test:/\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
          }),
          include:[
            path.resolve('./src')
          ]
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'main-[hash:8].css'
      }),
      new HtmlWebpackPlugin({
        filename:'index.html',
        template:'index.html'
      }),
      new MyPlugin({
        name:'evi'
      })
    ],
    devServer:{
      host:'0.0.0.0',
      compress:true
    }
}
