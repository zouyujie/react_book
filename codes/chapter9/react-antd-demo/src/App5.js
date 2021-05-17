import React, { Component } from 'react';
import { Button } from 'antd';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 style={{ width: '120px', textAlign: 'center' }}>
          {this.props.counter}
        </h3>
        <Button onClick={() => this.props.onIncrement()}>自增</Button>
        <Button onClick={() => this.props.onDecrement()}>自减</Button>
      </div>
    );
  }
}

export default App;
