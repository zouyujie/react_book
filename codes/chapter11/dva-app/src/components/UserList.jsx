import React, { Component } from "react";
import { updateListHttp,updateListAsync} from '../actions/index.js';

export default class UserList extends Component {
  //添加人员
  addUser = (event) => {
    const curUser = {
      name: "成是非",
      title: "黄字第一号",
      realName: "郭晋安",
    };
    this.props.dispatch({
      type: "users/updateList", //users是命名空间，updateList是users命名空间下的方法updateList
      data: curUser,
    });
  };
  //移除人员
  removeUser = (event) => {
    const curUser = { name: "上官海棠", title: "玄字第一号", realName: "叶璇" };
    // this.props.dispatch({
    //   type: "users/updateListAsync",
    //   payload: curUser,
    // });
    this.props.dispatch(updateListAsync(curUser));
  };
  //添加新boss
  addNewUser=()=>{
    this.props.dispatch({
      type: "users/updateListHttp"
    });
  }
  render() {
    const { userList } = this.props.userList;
    return (
      <div style={{ padding: "10px" }}>
        天、地、玄、黄
        <ul>
          {userList.map((ele, index) => {
            return (
              <li key={index}>
                {ele.name}-{ele.title}-{ele.realName}
              </li>
            );
          })}
        </ul>
        <button onClick={this.addUser}>新加入成员</button>
        <button onClick={this.removeUser}>移除一名成员</button>
        <button onClick={this.addNewUser}>增加boss</button>
      </div>
    );
  }
}
