import * as constants from './actionTypes';
import { getHomeData } from '../api/index';

//获取首页数据
export const getHomeDataAction = (url, params) => {
  return (dispatch) => {
    getHomeData().then((res) => {
      if (res.code === 200) {
        let homeData = res.data;
        //派发给reducer
        dispatch({
          type: constants.INIT_HOME_DATA,
          homeData,
        });
      }
    });
  };
};
//菜单折叠/展开
export const toggleCollapsedAction = (collapsed) => {
  return (dispatch) => {
    dispatch({
      type: constants.TOGGLE_COLLAPSED,
      collapsed: !collapsed,
    });
  };
};
