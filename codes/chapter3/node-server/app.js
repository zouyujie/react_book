// 用于创建网站服务器的模块
const http = require('http');
// 用于处理url地址
const url = require('url');
// app对象就是网站服务器对象
const app = http.createServer();
// 监听请求，当客户端有请求来的时候执行
app.on('request', (req, res) => {
  // 获取请求方式
  console.log(req.method);
  // 获取请求地址
  console.log(req.url);
  //   // 获取请求报文信息 req.headers，req.headers['accept']
  // console.log(req.headers);

  //指定响应内容类型和编码
  res.writeHead(200, {
    'content-type': 'text/html;charset=utf8',
  });
  let urlPath = req.url; //获取请求地址
  if (urlPath == '/' || urlPath == '/index') {
    res.end('<h2>这是首页</h2>');
  } else if (urlPath == '/list') {
    res.end('这是列表页');
  } else {
    res.end('没有找到');
  }
});
// 监听5000端口
app.listen(5000);
console.log('网站服务器启动成功');
