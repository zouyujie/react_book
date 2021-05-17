import * as constObj from '../constants/base';
const initState = {
  yesterday: {},
};

const weather = (state = initState, action) => {
  switch (action.type) {
    case constObj.WEATHER:
      return {
        yesterday: action.yesterday,
      };
    default:
      return state;
  }
};
export default weather;
