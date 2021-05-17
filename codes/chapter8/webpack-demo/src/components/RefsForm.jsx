import React, { Component } from 'react';

export class RefsForm extends Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
  }

  clickHandler = (e) => {
    console.log(this.username.current.value);
    console.log(this.password.current.value);
  };
  render() {
    return (
      <div className="refs-form">
        <div>
          <label style={{ width: '100px', display: 'inline-block' }}>
            用户名：
          </label>
          <input type="text" ref={this.username} />
        </div>
        <div>
          <label style={{ width: '100px', display: 'inline-block' }}>
            密码：
          </label>
          <input type="password" ref={this.password} />
        </div>
        <button onClick={this.clickHandler} style={{ marginLeft: '100px' }}>
          提交
        </button>
      </div>
    );
  }
}

export default RefsForm;
