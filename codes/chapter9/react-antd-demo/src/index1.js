import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'antd/dist/antd.css';
//1.引入redux
import { createStore } from 'redux';
//2.引入reducer
import counter from './reducers/counter.js';
//3.创建store仓库
const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <App
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      counter={store.getState()}
    />,
    document.getElementById('root')
  );
};
render();

//4.监听state变化
store.subscribe(render);
