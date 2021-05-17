const express = require('express');
const app = express();

app.use('/admin', (req, res, next) => {
  let isLogin = false;
  if (isLogin == true) {
    next();
  } else {
    res.send('请先登录');
  }
});
app.use('/admin', (req, res) => {
  res.send('这是后台管理页面');
});
app.use('/login', (req, res) => {
  res.send('这是登录页面');
});
app.listen(80, function () {
  console.log('应用运行在80端口');
});
