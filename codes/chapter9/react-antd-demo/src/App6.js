import React, { Component } from 'react';
import { Button } from 'antd';
//引入connect
import { connect } from 'react-redux';
//引入action
import { increment, decrement } from './actions/counter';

class App extends Component {
  render() {
    console.log(this.props); //counter: 0 decrement: () => {…}  increment: () => {…}
    const { increment, decrement } = this.props;
    return (
      <div className="App">
        <h3 style={{ width: '120px', textAlign: 'center' }}>
          {this.props.counter}
        </h3>
        <Button onClick={() => increment()}>自增</Button>
        <Button onClick={() => decrement()}>自减</Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
  };
};

export default connect(mapStateToProps, mapDispatchProps)(App);
