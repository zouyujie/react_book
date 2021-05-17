import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import PropTypes from 'prop-types';

class JieBreadcrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>{this.props.menuName}</Breadcrumb.Item>
        <Breadcrumb.Item>{this.props.subMenuName}</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
JieBreadcrumb.propTypes = {
  menuName: PropTypes.string,
  subMenuName: PropTypes.string,
};
//Prop设置默认值
JieBreadcrumb.defaultProps = {
  menuName: '首页',
  subMenuName: '个人中心',
};

export default JieBreadcrumb;
