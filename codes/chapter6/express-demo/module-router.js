//引入express框架
const express = require('express');
//创建网站服务器
const app = express();
//引入路由
const me = require('./router/me');
const school = require('./router/school');
//为路由对象匹配请求路径
app.use('/me', me);
app.use('/school', school);
app.listen(80);
console.log('网站服务器启动成功，监听80端口');
