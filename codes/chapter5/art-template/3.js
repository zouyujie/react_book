const template = require('art-template');
const path = require('path');
const moment = require('moment');
// 导入模板变量
template.defaults.imports.moment = moment;

// 设置模板的根目录
template.defaults.root = path.join(__dirname, 'tmpl');
// 配置模板的默认后缀
template.defaults.extname = '.html';
const html = template('date', {
  now: new Date(),
});
console.log(html);
