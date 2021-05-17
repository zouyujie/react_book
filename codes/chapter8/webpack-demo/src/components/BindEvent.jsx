import React, { Component } from 'react';

export default class BindEvent extends Component {
  constructor(props) {
    super(props);
    this.say = this.say.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.show('寂寞如雪，无人解.边城几度风情')}>
          古龙说
        </button>
        <button
          onClick={this.say(
            '只要有人的地方就有恩怨,有恩怨就会有江湖,人就是江湖。'
          ).bind(this)}
        >
          金庸说
        </button>
        <button
          onClick={this.say(
            '只要有人的地方就有恩怨,有恩怨就会有江湖,人就是江湖。'
          )}
        >
          金庸说
        </button>
      </div>
    );
  }
  say(msg) {
    console.log('金庸说：' + msg);
  }
  // 事件的处理函数，需要定义为一个箭头函数，然后赋值给函数名称
  show = (arg1) => {
    console.log('古龙说：' + arg1);
  };
}
