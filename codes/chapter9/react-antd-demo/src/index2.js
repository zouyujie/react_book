import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//1.引入redux
import { createStore } from 'redux';
//2.引入reducer
import counter from './reducers/counter.js';
//3.引入Provider
import { Provider } from 'react-redux';
//4.创建store仓库
const store = createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
