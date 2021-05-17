import React, { Component } from 'react';

export default class SetStateDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  //   async increment() {
  increment = async () => {
    //回调函数的方式
    // this.setState({
    //     count:this.state.count+1
    // },() => {
    //     console.log(this.state.count);
    // })
    // await async 方式
    await this.setStateAsync({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment.bind(this)}>自增</button>
      </div>
    );
  }
}
