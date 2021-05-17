import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Comment = (props, context) => {
  return <div>{context.text}</div>;
};
class Article extends Component {
  render() {
    return (
      <div>
        {this.context.color}
        <Comment></Comment>
      </div>
    );
  }
}
//根组件
class App extends Component {
  getChildContext() {
    return { color: 'yellow', text: '黄色闪光' };
  }
  render() {
    return (
      <div>
        <ul>
          <Article></Article>
        </ul>
      </div>
    );
  }
}
Article.contextTypes = {
  color: PropTypes.string,
};
Comment.contextTypes = {
  text: PropTypes.string,
};
App.childContextTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};
export default App;
