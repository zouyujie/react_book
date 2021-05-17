const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//拦截所有请求
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/add', (req, res) => {
  res.send(req.body);
});
app.listen(80);
console.log('网站服务器启动成功，监听80端口');
