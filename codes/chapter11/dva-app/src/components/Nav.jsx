import React, { Component } from "react";
import { Link, withRouter, routerRedux } from "dva/router";

class Nav extends Component {
  //跳转到用户列表页面
  jumpToUserList = () => {
    this.props.history.push("/user-list");
  };
  //跳转到用户页面
  jumpToUserPage = (event) => {
    this.props.dispatch(routerRedux.push("/user"));
  };
  render() {
    return (
      <div style={{ padding: "8px" }}>
        <Link to={{ pathname: "/" }}>去首页</Link>
        <button onClick={this.jumpToUserList}>用户列表</button>
        <button onClick={this.jumpToUserPage}>用户页</button>
      </div>
    );
  }
}
export default withRouter(Nav);
