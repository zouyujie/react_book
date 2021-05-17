const express = require('express');
const app = express();

app.get('/index', (req, res) => {
  throw new Error('报错了'); //抛出一个异常
});
//错误处理中间件
app.use((err, req, res, next) => {
  res.status(500).send('服务器错误');
});
app.listen(80);
console.log('网站服务器启动成功，监听80端口');
