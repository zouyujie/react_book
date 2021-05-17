import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  state = {
    value: '',
  };
  clickHandle = (data) => {
    this.setState({
      value: data,
    });
  };
  render() {
    return (
      <div>
        义父金毛狮王收到礼物：{this.state.value}
        <Child name="七伤拳" onParentEvent={this.clickHandle} />
      </div>
    );
  }
}

export default Parent;
