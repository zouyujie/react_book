import React, { Component } from 'react';

export default class EffectClassDemo extends Component {
  state = {
    count: 0,
  };
  //组件初始化后执行
  componentDidMount() {
    document.title = `你点击了${this.state.count}次`;
  }
  //组件数据变化时执行
  componentDidUpdate() {
    document.title = `你点击了${this.state.count}次`;
  }
  render() {
    return (
      <div>
        <div>你点击了{this.state.count}次</div>
        <div>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            添加
          </button>
        </div>
      </div>
    );
  }
}
