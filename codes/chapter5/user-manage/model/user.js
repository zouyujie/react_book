const mongoose = require('mongoose');
// 创建人员集合规则
const userSchema = new mongoose.Schema({
  //姓名
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 10,
  },
  //年龄
  age: {
    type: Number,
    min: 10,
    max: 400,
  },
  //性别
  sex: {
    type: String,
    enum: {
      values: ['男', '女'],
      message: '只能选男和女',
    },
  },
  //门派
  school: {
    type: String,
    enum: {
      values: ['0', '1', '2', '3', '4', '5'],
    },
  },
  //创建时间
  createOn: {
    type: Date,
    default: Date.now,
  },
});
// 创建人员信息集合
const User = mongoose.model('User', userSchema);
// 将人员信息集合进行导出
module.exports = User;
