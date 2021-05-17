const express = require('express');
const app = express();
app.get('/index', (req, res) => {
  //获取get请求参数
  res.send(req.query);
});
app.listen(80);
console.log('网站服务器启动成功，监听80端口');
