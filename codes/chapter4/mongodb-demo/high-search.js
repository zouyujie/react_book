const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/test') // 数据库连接
  .then(() => console.log('数据库连接成功')) // 连接成功
  .catch((err) => console.log('数据库连接失败', err)); // 连接失败

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  skill: String,
  title: String,
});

const User = mongoose.model('User', userSchema);
// 1.查询age在50（含）和80之间的记录age>=50&&age<80
// User.find({ age: { $gte: 50, $lt: 80 } }).then((res) => console.log(res));

// //2.匹配包含 查询age是30和50的记录
// User.find({ age: { $in: [30, 50] } }).then((res) => console.log(res));

// // 3.选择要查询的字段
// User.find()
//   .select('name age')
//   .then((res) => console.log(res));

//4.按照年龄进行排序
//age 升序
// User.find()
//   .sort('age')
//   .then((res) => console.log(res));
// //age降序
// User.find()
//   .sort({ age: -1 })  //sort(-age)
//   .then((res) => console.log(res));

// //   5.分页查询
// User.find()
//   .skip(3)
//   .limit(2)
//   .then((res) => console.log(res));

// //6.模糊查询
// User.find({ name: /张/ }).then((res) => console.log(res));

//7.删除文档
// User.findOneAndDelete({ name: '张无忌' }).then((res) => {
//   console.log(res);
// });

//8.批量删除
User.deleteMany({}).then((result) => console.log(result));
