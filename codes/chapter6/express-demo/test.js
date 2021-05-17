// 0. 安装 npm i express
// 1. 引包
var express = require('express');

// 2. 创建你服务器应用程序——也就是原来的 http.createServer
var app = express();

app.use((req, res, next) => {
  res.send('网站维护中...');
});
app.use((req, res, next) => {
  console.log('一天是不良人，一辈子都是');
  next();
});
app.use('/about', (req, res, next) => {
  console.log('300年功力可是你能撼动的');
  next();
});
app.get('/about', function (req, res, next) {
  req.name = '参见大帅';
  next();
});
app.get('/about', function (req, res) {
  res.send(req.name);
});
app.use((req, res, next) => {
  res.status(404); //指定响应状态码
  res.send('页面不存在');
});
// 相当于 server.listen
app.listen(80, function () {
  console.log('应用运行在80端口');
});
