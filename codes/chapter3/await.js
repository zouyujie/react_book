const fs = require('fs');
const util = require('util');
// 调用promisify方法改造现有异步API，让其返回promise对象
const readFile = util.promisify(fs.readFile);

async function run() {
  const res1 = await await readFile('a.txt', 'utf8');
  console.log(res1);
  const res2 = await await readFile('b.txt', 'utf8');
  console.log(res2);
}
//调用
run();
