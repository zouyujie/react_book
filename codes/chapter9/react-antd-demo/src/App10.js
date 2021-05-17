import React, { Component } from 'react';
const Button = (props) => <button>{props.children}</button>; //无状态组件
//传统组件
class Label extends Component {
  componentWillMount() {
    console.log('Label组件挂载前');
  }
  componentDidMount() {
    console.log('Label组件更新后');
  }
  render() {
    return <label>{this.props.children}</label>;
  }
}
//高阶组件
const HOC = (HighOrderComponent) =>
  class extends Component {
    componentWillMount() {
      console.log('高级组件挂载前');
    }
    componentDidMount() {
      console.log('高级组件更新后');
    }
    render() {
      // 在render()的时候让props继承到return出来的组件中
      return <HighOrderComponent {...this.props} />;
    }
  };
//使用高阶组件
const LabelHoc = HOC(Label);
//根组件
class App extends Component {
  render() {
    return (
      <div>
        <Button>陆游</Button>
        <br />
        <LabelHoc>花如解语还多事，石不能言最可人</LabelHoc>
        {/* <Label>花如解语还多事，石不能言最可人</Label> */}
      </div>
    );
  }
}

export default App;
