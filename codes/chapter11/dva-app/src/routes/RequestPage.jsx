import React, { Component } from "react";
import { Button } from "antd";
import * as api from "../services/example";

class RequestPage extends Component {
  getUserInfo = () => {
    api.getUserInfo().then((res) => {
      console.log("res :>> ", res);
    });
  };
  render() {
    return (
      <div style={{padding:'8px'}}>
        <Button type="primary" onClick={this.getUserInfo}>
          获取用户信息
        </Button>
      </div>
    );
  }
}

export default RequestPage;
