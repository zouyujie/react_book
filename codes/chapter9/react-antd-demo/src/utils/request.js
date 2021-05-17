import qs from 'querystring';
/**
 * get请求
 * @param {*} url
 */
export function httpGet(url) {
  const result = fetch(url);
  return result;
}
/**
 * post请求
 * @param {*} url
 * @param {*} params
 */
export function httpPost(url, params) {
  const result = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json,text/plain,*/*',
    },
    body: qs.stringify(params),
  });
  return result;
}
