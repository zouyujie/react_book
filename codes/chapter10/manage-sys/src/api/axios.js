import axios from 'axios'; //https://www.kancloud.cn/yunye/axios/234845
import { message } from 'antd';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 5000;
// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 登陆验证
    // config.headers.token = localStorage.getItem('$token_info');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (
      response &&
      response.data &&
      (response.data.code === 401 || response.data.code === 403)
    ) {
      //token 过期
      message.error('无权限访问');
      console.log('退出，跳转到登录页');
    }
    if (response && response.data && response.data.code !== 200) {
      message.error(response.data.msg);
      return Promise.reject(response.data);
    }
    return response.data;
  },
  (error) => {
    if (error && error.response && error.response.status) {
      message.error(error.response.msg);
      return Promise.reject(error);
    }
  }
);
export default axios;
