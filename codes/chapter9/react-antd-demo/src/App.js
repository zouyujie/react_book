import React, { Component } from 'react';
//引入connect
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.props.handleChange}
          value={this.props.value}
        />
        <ul>
          {this.props.list.map((i, index) => (
            <li key={index}>{i.name} </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  value: state.value,
  list: state.list || [],
});
const mapActionToProps = (dispatch) => ({
  handleChange: (v) =>
    dispatch({
      type: 'INPUT',
      payload: v.target.value,
    }),
});
export default connect(mapStateToProps, mapActionToProps)(App);
