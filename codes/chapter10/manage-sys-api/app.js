const express = require('express');
const path = require('path');
// 导入config模块
const config = require('config');
// 引入body-parser模块 用来处理post请求参数
const bodyPaser = require('body-parser');
// 数据库连接
require('./models/conn');
const app = express();
// 解析application/json
app.use(bodyPaser.json());
// 处理post请求参数
app.use(bodyPaser.urlencoded({ extended: false }));
//配置静态资源目录
app.use(express.static(path.join(__dirname, 'public')));
// 添加路由
require('./routes.js')(app);

app.listen(8000);
console.log('网站服务器启动成功，监听端口80，请访问http://localhost:8000');
