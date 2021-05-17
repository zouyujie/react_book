//引入express框架
const express = require('express');
//创建网站服务器
const app = express();
//创建路由对象
const admin = express.Router();
//为路由对象匹配请求路径
app.use('/admin', admin);
//创建二级路由
admin.get('/about', (req, res) => {
  res.send('我们是大唐不良人');
});
app.listen(80);
console.log('网站服务器启动成功，监听80端口');
