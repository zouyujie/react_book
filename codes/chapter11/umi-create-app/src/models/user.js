export default {
  state: {
    name: '',
  },
  effects: {
    *query({ payload }, { call, put }) {},
  },
  reducers: {
    // save(state, action) {
    //   state.name = '沈浪';
    //   return state;
    // },
    // 启用 immer 之后
    save(state, action) {
      state.name = '沈浪';
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({
        type: 'save',
      });
    },
  },
};
