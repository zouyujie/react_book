import { Layout, Menu } from 'antd';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  HomeOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;
class JieSider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { collapsed } = this.props;
    console.log('object :>> ', collapsed);
    return (
      <Sider
        width={200}
        className="site-layout-background"
        collapsed={collapsed}
      >
        {/* defaultSelectedKeys={[]}
          defaultOpenKeys={[]} */}
        <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
          defaultSelectedKeys={['0']}
        >
          <Menu.Item key="0" icon={<HomeOutlined />}>
            <NavLink to="/">仪表盘</NavLink>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="用户管理">
            <Menu.Item key="1">
              <NavLink to="/user">用户列表</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="课程管理">
            <Menu.Item key="5">
              <NavLink to="/course-list">课程列表</NavLink>
            </Menu.Item>
            <Menu.Item key="6">
              <NavLink to="/course-add">课程添加</NavLink>
            </Menu.Item>
            <Menu.Item key="7">
              <NavLink to="/course-category">课程分类</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="系统配置">
            <Menu.Item key="9">基础信息</Menu.Item>
            <Menu.Item key="10">退出登录</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    collapsed: state.collapsed,
  };
};
export default connect(mapStateToProps)(JieSider);
