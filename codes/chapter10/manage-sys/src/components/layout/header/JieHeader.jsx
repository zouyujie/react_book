import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import banner from '../../../assets/images/banner.jpg';
import './header.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleCollapsedAction } from '../../../store/actionCreators';
const { Header } = Layout;

class JieHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { collapsed } = this.props;
    console.log('this.props.state :>> ', collapsed);
    let icon =
      collapsed !== undefined && collapsed ? (
        <MenuUnfoldOutlined />
      ) : (
        <MenuFoldOutlined />
      );
    return (
      <Header className="header">
        <span
          className="icon-btn"
          onClick={() => this.props.toggleCollapsed(this.props.collapsed)}
        >
          {icon}
        </span>
        <div className="logo">
          {/* <img src="../../../assets/images/banner.jpg" /> */}
          <img src={banner} alt="" />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
          <Menu.Item key="1">帮助中心</Menu.Item>
          <Menu.Item key="2">博客首页</Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/">个人中心</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    collapsed: state.collapsed,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleCollapsed: (collapsed) => {
      const action = toggleCollapsedAction(collapsed);
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(JieHeader);
