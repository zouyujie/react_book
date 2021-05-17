import React, { Component } from "react";
import { connect } from "dva";
import UserList from "../../components/UserList";

class UserListPage extends Component {
  render() {
    const { userList, dispatch } = this.props;
    return (
      <div>
        <UserList dispatch={dispatch} userList={userList}></UserList>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userList: state.users, //users是命名空间
  };
};
export default connect(mapStateToProps)(UserListPage);
