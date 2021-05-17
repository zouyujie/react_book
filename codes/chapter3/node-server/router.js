const http = require('http');
const url = require('url');
const app = http.createServer();

app.on('request', (req, res) => {
  // 获取请求方式
  const method = req.method.toLowerCase();
  // 获取请求地址
  const pathname = url.parse(req.url).pathname;
  res.writeHead(200, {
    'content-type': 'text/html;charset=utf8',
  });

  if (method == 'get') {
    if (pathname == '/' || pathname == '/index') {
      res.end('这是首页');
    } else if (pathname == '/login') {
      res.end('这是登录页');
    } else {
      res.end('您访问的页面不存在');
    }
  } else if (method == 'post') {
    //post请求执行
    res.end();
  }
});

app.listen(5000);
console.log('服务器启动成功，监听5000端口');
