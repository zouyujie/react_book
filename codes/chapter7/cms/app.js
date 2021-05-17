const express = require('express');
const path = require('path');
// 导入config模块
const config = require('config');
// 导入express-session模块
const session = require('express-session');
// 导入art-tempate模板引擎
const template = require('art-template');
const moment = require('moment');
// 引入body-parser模块 用来处理post请求参数
const bodyPaser = require('body-parser');

// 向模板内部导入moment变量
template.defaults.imports.moment = moment;
// 数据库连接
require('./models/conn');

const app = express();
// 配置session
app.use(
  session({
    secret: 'zouyujie',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, //1天
    },
  })
);
// 处理post请求参数
app.use(bodyPaser.urlencoded({ extended: false }));
//配置静态资源目录
app.use(express.static(path.join(__dirname, 'public')));
//设置模板位置
app.set('views', path.join(__dirname, 'views'));
//配置模板默认后缀
app.set('view engine', 'art');
// 当渲染后缀为art的模板时，指定所使用的模板引擎是什么
app.engine('art', require('express-art-template'));
// 全局过滤器
app.use('/admin', require('./filters/index.js'));

// 添加路由
require('./routes.js')(app);

app.listen(80);
console.log('网站服务器启动成功，监听端口80，请访问http://localhost');
