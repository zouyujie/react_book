import React, { Component } from 'react';
import { Button } from 'antd';
//引入connect
import { connect } from 'react-redux';
//引入action
import * as counterActions from './actions/counter';
import { bindActionCreators } from 'redux';

class App extends Component {
  render() {
    console.log(this.props); //counter: 0 decrement: () => {…}  increment: () => {…}
    return (
      <div className="App">
        <h3 style={{ width: '120px', textAlign: 'center' }}>
          {this.props.counter}
        </h3>
        <Button onClick={() => this.props.counterActions.increment()}>
          自增
        </Button>
        <Button onClick={() => this.props.counterActions.decrement()}>
          自减
        </Button>
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
    counterActions: bindActionCreators(counterActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(App);
