const HtmlWebPackPlugin = require('html-webpack-plugin'); // 1.导入在内存中自动生成 index 页面的插件
const path = require('path');

// 2.创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html', // 生成的内存中首页的名称
});
// 向外暴露一个打包的配置对象
module.exports = {
  mode: 'development', //evelopment or production
  plugins: [
    htmlPlugin, //3.引入插件
  ],
  module: {
    //要打包的第三方模块
    rules: [
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          // 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', //旧版本css-loader
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[path][name]-[local]-[hash:5]' },
            },
          }, //新版本css-loader配置
        ],
      }, //打包处理自己写的scss样式，并启用模块化
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 打包处理CSS样式表的第三方loader
      { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' }, // 打包处理字体文件的loader
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      // 表示别名
      '@': path.join(__dirname, './src'), // 这样，@ 就表示项目根目录中 src 的这一层路径
    },
  },
};
