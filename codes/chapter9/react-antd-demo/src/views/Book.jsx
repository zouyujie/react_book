import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div>
        图书列表
        <hr></hr>
        {this.props.children}
      </div>
    );
  }
}

export default Book;
