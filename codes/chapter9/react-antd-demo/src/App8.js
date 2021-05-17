import React, { Component } from 'react';
import { Button } from 'antd';
//引入connect
import { connect } from 'react-redux';
//引入action
import * as counterActions from './actions/counter';
import { bindActionCreators } from 'redux';
import * as eventAction from './actions/eventAction';

class App extends Component {
  render() {
    console.log(this.props); //counter: 0 decrement: () => {…}  increment: () => {…}
    return (
      <div className="App">
        <h3 style={{ width: '120px', textAlign: 'center' }}>
          {this.props.counter}
        </h3>
        <Button onClick={() => this.props.counterActions.increment(2)}>
          自增
        </Button>
        <Button onClick={() => this.props.counterActions.decrement(4)}>
          自减
        </Button>
        <div>
          <Button onClick={() => this.props.eventAction.wipeOut()}>
            消灭明教
          </Button>
          <div> {this.props.eventMsg}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    eventMsg: state.eventReducer,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    counterActions: bindActionCreators(counterActions, dispatch),
    eventAction: bindActionCreators(eventAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(App);
