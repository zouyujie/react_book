const http = require('http');
const app = http.createServer();

app.on('request', (req, res) => {
  req.headers; // 获取请求报文
  req.url; // 获取请求地址
  req.method; // 获取请求方法
});

app.on('request', (req, res) => {
  // 设置响应报文
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
});
