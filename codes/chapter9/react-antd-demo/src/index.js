import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/user-reducer.js';
import saga from './saga.js';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  { value: '', list: [] },
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

