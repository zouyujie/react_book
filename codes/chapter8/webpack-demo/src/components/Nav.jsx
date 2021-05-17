import React from 'react';
import styles from './styles.js';
import cssObj from './nav.css';
// class 关键字创建组件
export default class Nav extends React.Component {
  // 构造器
  constructor() {
    // 由于 Nav 组件继承了 React.Component 这个父类，所以自定义的构造器中，必须调用 super()
    super();
    // 只有调用了 super() 以后，才能使用 this 关键字,state相当于vue中的data
    this.state = {
      msg: '这是导航组件',
    };
  }
  render() {
    return (
      // style内联样式
      // <ul>
      //   {this.props.menus.map((m) => (
      //     <li
      //       key={m.name}
      //       style={{
      //         listStyleType: 'none',
      //         float: 'left',
      //         margin: '0px 5px',
      //         color: 'lightblue',
      //       }}
      //     >
      //       {m.name}
      //     </li>
      //   ))}
      // </ul>
      //style样式对象封装
      // <ul>
      //   {this.props.menus.map((m) => (
      //     <li key={m.name} style={styles.liStyle}>
      //       {m.name}
      //     </li>
      //   ))}
      // </ul>
      //class外部样式引用
      // <li key={m.name} className={index == 0 ? cssObj.first : ''}>
      <ul>
        {this.props.menus.map((m, index) => (
          <li key={m.name}>{m.name}</li>
        ))}
      </ul>
    );
  }
}
