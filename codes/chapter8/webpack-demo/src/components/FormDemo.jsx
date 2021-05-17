import React, { Component } from 'react';

export class FormDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }
  onChangeHandler = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault(); //阻止表单默认跳转事件
    console.log(this.state.username);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.onChangeHandler}
          />
          <button type="submit">提交</button>
        </form>
      </div>
    );
  }
}

export default FormDemo;
