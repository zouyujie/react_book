import request from "../utils/request";

export function query() {
  return request("/api/users");
}
export function getUserInfo() {
    return request({
    url: '/api/user',
    method: 'get',
    data: {}
  })
}
