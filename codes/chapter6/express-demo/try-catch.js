const express = require('express');
const fs = require('fs');
const app = express();

app.get('/file', async (req, res, next) => {
  //捕获异常
  try {
    await fs.readFile('/1.txt');
  } catch (err) {
    next(err);
  }
});
//错误处理中间件
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
app.listen(80);
console.log('网站服务器启动成功，监听80端口');
