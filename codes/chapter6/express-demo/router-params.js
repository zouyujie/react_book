const express = require('express');
const path = require('path');
const app = express();

app.get('/detail/:id', (req, res) => {
  res.send(req.params);
});

// //实现静态资源访问
app.use(express.static(path.join(__dirname, 'public')));

app.listen(80);
console.log('网站服务器启动成功，监听80端口');
