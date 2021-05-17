// 1.通过模块的名字fs对模块进行引用
const fs = require('fs');

// 2.通过模块内部的readFile读取文件内容，res 是文件读取的结果
fs.readFile('./hello-china.js', 'utf8', (err, res) => {
  // 如果文件读取出错err是一个包含错误信息的对象
  // 如果文件读取正确err是 null
  console.log(err);
  console.log(res);
});
