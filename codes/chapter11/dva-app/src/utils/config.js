//config.js文件
const config = {
    apiUrl: process.env.NODE_ENV === 'development' ? ' http://127.0.0.1:8001' : 'https://www.cnblogs.com/jiekzou/',
    apiPrefix: ' http://127.0.0.1:8001',
    proxy: true  //是否开启mock代理
  };
  
  export default config;
  