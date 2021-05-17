class 组件名称 extends React.Component {
  // 在组件内部必须有render 函数，其作用是渲染当前组件对应的虚拟DOM结构
  render() {
    // render 函数中，必须返回合法的 JSX 虚拟DOM结构
    return <div>这是 class 创建的组件</div>;
  }
}

import React, { Component } from 'react';
class 组件名称 extends Component {
  render() {
    return <div></div>;
  }
}
