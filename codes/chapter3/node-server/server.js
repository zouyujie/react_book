// require：引用系统模块
// http：用于创建网站服务器的模块
const http = require('http');
// 创建web服务器
const app = http.createServer();
// 监听请求，当客户端发送请求的时候执行
app.on('request', (req, res) => {
  //设置响应内容的编码，不设置的话，中文可能会出现乱码
  res.writeHead(200, {
    'content-type': 'text/html;charset=utf8',
  });
  // 响应内容
  res.end('欢迎来到2020');
});
// 监听3000端口
app.listen(3000);
console.log('服务器已启动，监听3000端口，请访问 localhost:3000');
