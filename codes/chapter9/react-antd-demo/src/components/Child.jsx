import React, { Component } from 'react';

class Child extends Component {
  clickHandle = (e) => {
    this.props.onParentEvent('屠龙刀');
  };
  render() {
    return (
      <div>
        教无忌孩儿：{this.props.name}
        <button onClick={this.clickHandle}>送礼物</button>
      </div>
    );
  }
}

export default Child;
