import { takeEvery, put, take } from 'redux-saga/effects';
import users from './utils/user';

function* input() {
  yield takeEvery('INPUT', function* (v) {
    let filterUsers = yield getData(v.payload);
    yield put({ type: 'SET_LIST', payload: filterUsers.slice(0, 10) });
  });
}

function getData(v) {
  return new Promise(function (res, rej) {
    //模拟异步ajax请求
    setTimeout(() => {
      let result = users.filter((i) => i.school.includes(v));
      console.log('result', result);
      res(result);
    }, 1000);
  });
}

export default input;
