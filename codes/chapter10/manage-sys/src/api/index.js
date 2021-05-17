import request from './request';
//获取首页数据
export const getHomeData = () => {
  return request.get('/home', {});
};
//获取用户列表数据
export const getUserListData = (params) => {
  return request.post('/user/list', params);
};
//删除用户记录
export const delUserRecord = (id) => {
  return request.get(`/user/delete?id=${id}`);
};
//添加用户
export const addUser = (params) => {
  return request.post('/user/add', params);
};
//编辑用户
export const editUser = (params) => {
  return request.post('/user/edit', params);
};
