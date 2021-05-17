const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'tmpl', 'index.art');

const html = template(views, {
  msg: '首页模板',
});

console.log(html);
