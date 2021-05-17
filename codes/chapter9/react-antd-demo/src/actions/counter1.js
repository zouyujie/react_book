import * as constObj from '../constants/base';
export function increment() {
  return {
    type: constObj.INCREMENT,
  };
}
export function decrement() {
  return {
    type: constObj.DECREMENT,
  };
}
