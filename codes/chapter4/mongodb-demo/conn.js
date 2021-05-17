// 引入mongoose第三方模块用来操作数据库
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/admin') // 数据库连接
  .then(() => console.log('数据库连接成功')) // 连接成功
  .catch((err) => console.log('数据库连接失败', err)); // 连接失败

