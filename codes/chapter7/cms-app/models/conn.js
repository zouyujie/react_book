// 引入mongoose第三方模块
const mongoose = require('mongoose');
const config = require('config');
console.log('title', config.get('title'), config.get('db.pwd'));
mongoose.set('useCreateIndex', true); //加上这个，解决：DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
// 连接数据库
mongoose
  .connect(
    `mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get(
      'db.host'
    )}:${config.get('db.port')}/${config.get('db.name')}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('数据库连接成功'))
  .catch(() => console.log('数据库连接失败'));
