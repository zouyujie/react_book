// 引入mongoose第三方模块用来操作数据库
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/demo') // 数据库连接
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

// 1.创建文档
const book = new Book({
  bookName: '九阴真经',
  author: '黄裳',
  isPublished: true,
});
// 2.将文档插入到数据库中
book.save();

//另一种插入文档的方式
Book.create(
  { bookName: '九阳神功', author: '斗酒僧', isPublish: true },
  (err, doc) => {
    if (err) {
      console.log(err); //  错误对象
    } else {
      console.log(doc); //  当前插入的文档
    }
  }
);
//Promise方式
Book.create({ bookName: '九阳神功', author: '斗酒僧', isPublish: true })
  .then((doc) => {
    console.log(doc); //  当前插入的文档
  })
  .catch((err) => {
    console.log(err); //  错误对象
  });
