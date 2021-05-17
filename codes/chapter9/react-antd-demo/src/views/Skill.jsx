import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Skill extends Component {
  clickHandler() {
    this.props.history.push('/home');
  }
  render() {
    return (
      <div>
        灵犀一指
        <button onClick={this.clickHandler.bind(this)}>返回首页</button>
      </div>
    );
  }
}
export default withRouter(Skill);
