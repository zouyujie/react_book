import * as constObj from '../constants/base';
// export function increment(num) {
//   return {
//     type: constObj.INCREMENT,
//     num, //等价于num:num，ES6新语法
//   };
// }
export function increment(num) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: constObj.INCREMENT,
        num, //等价于num:num，ES6新语法
      });
    }, 1000);
  };
}
export function decrement(num) {
  return {
    type: constObj.DECREMENT,
    num,
  };
}
