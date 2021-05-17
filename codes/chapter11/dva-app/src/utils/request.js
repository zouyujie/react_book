import fetch from "dva/fetch";
import config from './config';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
const assyParams = (obj) => {
  let str = ''
  for (let key in obj) {
    const value = typeof obj[key] !== 'string' ? JSON.stringify(obj[key]) : obj[key]
    str += '&' + key + '=' + value
  }
  return str.substr(1)
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(obj) {
  let url = '';
  let options = {
    method: obj.method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'include'	 //是否携带cookie，默认为omit不携带; same-origi同源携带; include同源跨域都携带
  };
  if (obj.method === 'GET' || obj.method === 'get') {
    url = (config.proxy ? obj.url : config.apiUrl + obj.url) + '?' + assyParams(obj.data);
  }
  if (obj.method === 'POST' || obj.method === 'post') {
    url = config.proxy ? obj.url : config.apiUrl + obj.url;
    options.body = JSON.stringify(obj.data);
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }))
}
