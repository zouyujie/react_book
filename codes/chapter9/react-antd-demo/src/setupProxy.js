const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // proxy第一个参数为要代理的路由
  // 第二参数中target为代理后的请求网址，changeOrigin是否改变请求头，
  // 其他参数请看https://github.com/facebook/create-react-app/blob/3f699fd08044de9ab0ce1991a66b376d3e1956a8/docusaurus/docs/proxying-api-requests-in-development.md
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:4000',
      changeOrigin: true, //是否改变请求头
    })
  );
};
