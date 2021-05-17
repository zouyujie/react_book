//文件读取
const fs = require('fs');
fs.readFile('./book.txt', (err, result) => {
  // 在这里就可以通过判断 err 来确认是否有错误发生
  if (err) {
    console.log('读取文件失败了');
  } else {
    // console.log(result);//<Buffer e3 80 8a e6 80
    console.log(result.toString());
  }
});
console.log('文件读取完毕');

//http操作
const http = require('http');
var server = http.createServer();
server.on('request', (req, res) => {});
server.listen(3000, function () {
  console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问');
});
