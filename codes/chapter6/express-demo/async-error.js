const express = require('express');
const fs = require('fs');
const app = express();

app.get('/file', (req, res, next) => {
  //读取一个不存在的文件，引发错误
  fs.readFile('/1.txt', (err, data) => {
    if (err) {
      next(err);
    }
  });
});
//错误处理中间件
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
app.listen(80);
console.log('网站服务器启动成功，监听80端口');
