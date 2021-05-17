import React from 'react';
import ReactDOM from 'react-dom';
import App from './App13';
//1.引入redux
import { createStore, applyMiddleware } from 'redux';
//2.引入reducer
import allReducer from './reducers/index.js';
//3.引入Provider
import { Provider } from 'react-redux';
// //自定义中间件
// const logger = (store) => (next) => (action) => {
//   console.log('action', action);
//   let res = next(action); //加载下一个中间件
//   console.log('next state', store.getState());
//   return res;
// };
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (exe) {
    console.log('error', exe);
  }
};
//4.创建store仓库
const store = createStore(
  allReducer,
  // applyMiddleware(logger, error, thunk)
  composeWithDevTools(applyMiddleware(logger, error, thunk))
);
// //const logger = (store) => (next) => (action) => 等价于
// const logger(store){
//   return function(next){
//     return function(action){
//     }
//   }
// }
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
