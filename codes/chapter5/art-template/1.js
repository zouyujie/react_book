// 导入模板引擎模块
const template = require('art-template');
const path = require('path');
const tmpl = path.join(__dirname, 'tmpl', '1.art');

// 将特定模板与特定数据进行拼接
const html = template(tmpl, {
  name: '石中玉',
  age: 20,
});
console.log(html);
