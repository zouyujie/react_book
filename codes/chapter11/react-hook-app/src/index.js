import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import StateDemo from './components/StateDemo';
// import EffectClassDemo from './components/EffectClassDemo';
import EffectDemo from './components/EffectDemo';
import UseReducerdDemo from './components/UseReducerdDemo';

ReactDOM.render(
  <React.StrictMode>
    {/* <StateDemo /> */}
    {/* <EffectClassDemo /> */}
    {/* <EffectDemo /> */}
    <UseReducerdDemo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
