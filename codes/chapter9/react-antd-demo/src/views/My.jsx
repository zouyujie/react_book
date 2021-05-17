import React, { Component } from 'react';
import querystring from 'querystring';
import Skill from './Skill';
class My extends Component {
  clickHandler = () => {
    // console.log('this.props.history :>> ', this.props.history);
    this.props.history.replace('/home');
  };
  render() {
    console.log('this.props.location :>> ', this.props.location);
    // const params = new URLSearchParams(this.props.location.search);
    //要去掉前面的问号，否则无法解析第一个参数
    const search = this.props.location.search.substr(1);
    console.log('search :>> ', search);
    const params = querystring.parse(search);
    return (
      <div>
        <br />
        <p>用户名：{params.username}</p>
        <p>年龄：{params.age}</p>
        <div>
          <button onClick={this.clickHandler}>回到首页</button>
        </div>
        <Skill></Skill>
        {/* <p>用户名：{params.get('username')}</p>
        <p>年龄：{params.get('age')}</p>
        我的：{this.props.match.params.name} */}
      </div>
    );
  }
}

export default My;
