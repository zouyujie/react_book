import React, { Component } from 'react';

export class MinxinsDemo extends Component {
  render() {
    return <div>{this.props.children ? this.props.children : '暂无数据'}</div>;
  }
}

export default MinxinsDemo;
