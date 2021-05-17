// const fs = require('fs');
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve({ name: '张三丰' });
//     } else {
//       reject('失败');
//     }
//   }, 1000);
// });
// promise
//   .then(
//     (result) => console.log(result) // {name: '张三丰'})
//   )
//   .catch((error) => console.log(error)); // 失败

const fs = require('fs');
//封装Promise对象到方法中
function p1() {
  return new Promise((resolve, reject) => {
    fs.readFile('a.txt', 'utf8', (err, res) => {
      resolve(res.toString());
    });
  });
}
function p2() {
  return new Promise((resolve, reject) => {
    fs.readFile('b.txt', 'utf8', (err, res) => {
      resolve(res.toString());
    });
  });
}
//调用
p1()
  .then((res) => {
    console.log(res);
    return p2();
  })
  .then((res) => {
    console.log(res);
  });
