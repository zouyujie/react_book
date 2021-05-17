import * as constants from './actionTypes';
//默认的数据
const defaultState = { collapsed: false };
export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case constants.INIT_HOME_DATA:
      newState.homeData = action.homeData;
      break;
    case constants.TOGGLE_COLLAPSED:
      newState.collapsed = action.collapsed;
      break;
    default:
      break;
  }
  return newState;
};
