import * as api from "../services/example";
export default {
  namespace: "users",
  state: {
    userList: [
      {
        name: "段天涯",
        title: "天字第一号",
        realName: "李亚鹏",
      },
      {
        name: "归海一刀",
        title: "地字第一号",
        realName: "霍建华",
      },
      {
        name: "上官海棠",
        title: "玄字第一号",
        realName: "叶璇",
      },
    ],
  },
  reducers: {
    updateList(state, action) {
      let curState = deepCopy(state);
      console.log('action', action)
      curState.userList.push(action.data);
      return curState;
    },
    removeUser(state, action) {
      let curState = deepCopy(state);
      let curIndex = curState.userList.findIndex(
        (f) => f.name === action.payload.name
      );
      console.log("curIndex", curIndex);
      curState.userList.splice(curIndex, 1);
      return curState;
    },
  },
  effects: {
    *updateListAsync({ payload }, { put, call }) {
      yield put({ type: "removeUser", payload });
    },
    //params是请求参数
    *updateListHttp({ params }, { put, call }) {
      //网络请求
      const result = yield call(api.getUserInfo, params);
      if (result.data.code === 200 && result.data.data) {
        yield put({ type: "updateList", data:result.data.data });
      }
    },
  },
  subscriptions:{
    //这个方法名称可以随意命名
    watchWin({ dispatch, history }){
         const newData={name:'柳生飘雪',title:'雪飘人间',realName:'黄圣依'};
         window.onresize=()=>{
          dispatch({ type: "updateList", data:newData })
         }
    },
    watchHistory({dispatch, history}){
      history.listen((location) => {
        console.log('location',location);
      });
    }
  }
};
/**
 * 深拷贝
 * @param {*} obj 待拷贝对象
 */
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
