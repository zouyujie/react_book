// 引入mongoose第三方模块用来操作数据库
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/test') // 数据库连接
  .then(() => console.log('数据库连接成功')) // 连接成功
  .catch((err) => console.log('数据库连接失败', err)); // 连接失败

// 事件集合规则
const eventSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  createOn: {
    type: Date,
    default: Date.now,
  },
  //使用ID将用户和事件关联
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});
const Event = mongoose.model('Event', eventSchema);
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  skill: String,
  title: String,
});
const User = mongoose.model('User', userSchema);

// 创建事件
// 注意，这里的createBy值从数据库中去找到张三丰的_id属性值
Event.create({
  name: '一招击退玄冥二老',
  createBy: '5ede4fcbf0c7ffd2607409f9',
}).then((res) => console.log(res));

//查找事件
Event.find()
  .populate('createBy')
  .then((res) => console.log(res));
