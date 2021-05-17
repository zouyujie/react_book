// 用于创建网站服务器的模块
const http = require('http');
// 用于处理url地址
const url = require('url');
// app对象就是网站服务器对象
const app = http.createServer();
// 监听请求，当客户端有请求来的时候执行
app.on('request', (req, res) => {
  if (req.url == '/favicon.ico') return;
  //指定响应内容类型和编码
  res.writeHead(200, {
    'content-type': 'text/html;charset=utf8',
  });
  //   let urlObj=url.parse(req.url, true);
  //   console.log(urlObj);
  // 1) 要解析的url地址
  // 2) 将查询参数解析成对象形式
  let { query, pathname } = url.parse(req.url, true);
  res.write(query.name);
  res.write('：');
  res.write(query.age);
  res.end();
});
// 监听5001端口
app.listen(5001);
console.log('网站服务器启动成功，监听端口5001');
