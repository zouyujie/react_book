function getData(callback) {
  callback('江湖最后一个大侠');
}
//将匿名函数作为一个参数进行传递
getData(function (msg) {
  console.log('callback函数被调用了');
  console.log(msg);
});

const fs = require('fs');
fs.readFile('a.txt', 'utf8', (err, res1) => {
  console.log(res1);
  fs.readFile('b.txt', 'utf8', (err, res2) => {
    console.log(res2);
  });
});
