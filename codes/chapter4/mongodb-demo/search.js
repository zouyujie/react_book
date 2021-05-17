// 引入mongoose第三方模块用来操作数据库
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/test') // 数据库连接
  .then(() => console.log('数据库连接成功')) // 连接成功
  .catch((err) => console.log('数据库连接失败', err)); // 连接失败

// 1.创建集合规则
const bookSchema = new mongoose.Schema({
  bookName: String,
  author: String,
  isPublished: Boolean,
});

// 2.使用规则创建集合
// 1.集合名称
// 2.集合规则
const Book = mongoose.model('Book', bookSchema); // 对应到MongoDB中的集合名books

//  根据条件查找文档（条件为空则查找所有文档）
// Book.find().then((result) => console.log(result));

//  根据条件查找文档
Book.findOne({ author: '林朝英' }).then((result) => console.log(result));
