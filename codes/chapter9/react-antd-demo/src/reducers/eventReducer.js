import * as constObj from '../constants/base';
const eventReducer = (state = '', action) => {
  switch (action.type) {
    case constObj.WIPEOUT:
      state = '六大派围攻光明顶';
      return state;
    default:
      return state;
  }
};
export default eventReducer;
