import * as constObj from '../constants/base';
const counter = (state = 0, action) => {
  switch (action.type) {
    case constObj.INCREMENT:
      // throw new Error('秀逗了');
      return state + action.num;
    case constObj.DECREMENT:
      return state - action.num;
    default:
      return state;
  }
};
export default counter;
