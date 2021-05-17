// 用于创建网站服务器的模块
const http = require('http');
// app对象就是网站服务器对象
const app = http.createServer();
// 处理请求参数模块
const querystring = require('querystring');
// 当客户端有请求来的时候
app.on('request', (req, res) => {
  // post参数是通过事件的方式接收的
  let postParams = '';
  // data 当请求参数传递的时候触发data事件
  req.on('data', (params) => {
    postParams += params;
  });
  // end 当参数传递完成的时候触发end事件
  req.on('end', () => {
    console.log(querystring.parse(postParams));
  });
  res.end('ok');
});
// 监听端口5000
app.listen(5000);
console.log('网站服务器启动成功，监听5000端口');
