// 导入bcrypt模块
const bcrypt = require('bcryptjs');
// 生成随机字符串 gen => generate 生成 salt 盐
let salt = await bcrypt.genSalt(10);
// 使用随机字符串对密码进行加密
let pass = await bcrypt.hash('明文密码', salt);
// 密码比对
let isEqual = await bcrypt.compare('明文密码', '加密密码');
