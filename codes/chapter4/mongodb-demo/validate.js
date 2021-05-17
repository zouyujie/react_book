const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/test') // 数据库连接
  .then(() => console.log('数据库连接成功')) // 连接成功
  .catch((err) => console.log('数据库连接失败', err)); // 连接失败

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator: (val) => {
        // 返回布尔值:true 验证成功,false 验证失败
        // val:要验证的值
        return val && val.length > 2;
      },
      // 自定义错误信息
      message: '传入的值不符合验证规则',
    },
  },
  age: {
    type: Number,
    // 数字的最小范围
    min: 18,
    // 数字的最大范围
    max: 100,
  },
  skill: {
    type: String,
    // 枚举，列举出当前字段可以拥有的值
    enum: {
      values: ['九阴真经', '蛤蟆功', '降龙十八掌', '一阳指'],
      message: '该武功不存在',
    },
  },
  title: {
    type: String,
    // 必选字段
    required: [true, '请传入头衔名称'],
    // 字符串的最小长度
    minlength: [2, '头衔长度不能小于2'],
    // 字符串的最大长度
    maxlength: [5, '头衔长度最大不能超过10'],
    // 去除字符串两边的空格
    trim: true,
  },
});

const User = mongoose.model('User', userSchema);
//插入文档进行测试
User.create({
  name: '萧峰',
  age: 33,
  skill: '擒龙功',
  title: '丐帮帮主、辽国南院大王、完颜阿骨打的结拜兄弟',
})
  .then((result) => console.log(result))
  .catch((error) => {
    // 获取错误信息对象
    const err = error.errors;
    // 循环错误信息对象
    for (var attr in err) {
      // 将错误信息打印到控制台中
      console.log(err[attr]['message']);
    }
  });
