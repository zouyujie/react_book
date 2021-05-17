import React, { Component } from 'react';

class ComponentLife extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '天上白玉京，十二楼五城。',
    };
  }
  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  UNSAFE_componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  changeHandler = () => {
    this.setState({
      msg: '仙人抚我顶，结发受长生',
    });
  };
  clickChange = () => {
    this.props.clickChanges('中-古龙');
  };
  render() {
    const { msg } = this.state;
    return (
      <div>
        生命周期函数：{msg} - {this.props.author}
        <button onClick={this.changeHandler}>修改msg</button>
        <button onClick={this.clickChange}>修改author</button>
      </div>
    );
  }
}

export default ComponentLife;
