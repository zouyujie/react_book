import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Settings extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <div>
        设置
        {/* <Prompt message="您确定要离开该页面吗?" /> */}
        <Prompt when={this.state.isOpen} message={'您确定要离开该页面吗'} />
        <input
          type="checkbox"
          value={this.state.isOpen}
          onChange={(e) => this.setState({ isOpen: !this.state.isOpen })}
        />
        是否离开
      </div>
    );
  }
}

export default Settings;
