import * as constObj from '../constants/base';
const counter = (state = 0, action) => {
  switch (action.type) {
    case constObj.INCREMENT:
      return state + 1;
    case constObj.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
export default counter;
