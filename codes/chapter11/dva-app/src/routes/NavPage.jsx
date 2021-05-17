import React, { Component } from "react";
import Nav from "../components/Nav";
import { connect } from "dva";

class NavPage extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <Nav dispatch={dispatch}></Nav>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps)(NavPage);
