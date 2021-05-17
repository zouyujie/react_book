import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PropsTypeDemo extends Component {
  render() {
    return <div>{this.props.title}</div>;
  }
}
PropsTypeDemo.propTypes = {
  title: PropTypes.string,
};
//Prop设置默认值
PropsTypeDemo.defaultProps = {
  title: '默认值',
};
