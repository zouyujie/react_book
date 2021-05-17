import React, { Component, Fragment } from 'react';
//传统组件
class Item extends Component {
  render() {
    return (
      // <>
      //   <li>老程序员未死，只是凋零</li>
      // </>
      <Fragment>
        <li>老程序员未死，只是凋零</li>
      </Fragment>
    );
  }
}
//根组件
class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <Item></Item>
        </ul>
      </div>
    );
  }
}

export default App;
