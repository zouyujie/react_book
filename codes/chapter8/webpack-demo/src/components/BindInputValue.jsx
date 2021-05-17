import React, { Component } from 'react';

export default class BindInputValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '只要还能笑，一个人的确应该多笑。',
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          style={{ width: '100%' }}
          value={this.state.msg}
          onChange={() => this.textChanged()}
          ref="mytxt"
        />
        {/* 事件参数 e  */}
        <input
          type="text"
          style={{ width: '100%' }}
          value={this.state.msg}
          onChange={(e) => this.textChangedEvent(e)}
        />
      </div>
    );
  }
  // 响应文本框内容改变的处理函数
  textChanged = () => {
    this.setState({
      msg: this.refs.mytxt.value,
    });
  };
  // 事件参数 e
  textChangedEvent = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };
}
