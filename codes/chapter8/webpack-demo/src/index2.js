// console.log('hello webpack');

// 1. 导入包
import React from 'react';
import ReactDOM from 'react-dom';

// 2. 创建虚拟DOM元素
/**
 * 参数1： 创建的元素的类型，字符串，表示元素的名称
 * 参数2：是一个对象或 null, 表示当前这个DOM元素的属性
 * 参数3：子节点（包括其它虚拟DOM或文本子节点）
 * 参数n: 其它子节点
 */
const myh3 = React.createElement(
  'h3',
  { id: 'myh3', title: 'beautiful mood' },
  '美丽心情'
);

// 3. 使用 ReactDOM 把虚拟DOM 渲染到页面上
/**
 * 参数1： 要渲染的那个虚拟DOM元素
 * 参数2： 指定页面上的DOM元素来当作容器
 */
// ReactDOM.render(myh3, document.getElementById('app'));

// 3.实现Dom嵌套
// const mydiv = React.createElement('div', null, '多雨的冬季总算过去', myh3);

// 3.直接使用JSX语法
// const newDiv = (
//   <div>
//     <h3>天从人愿</h3>
//     <div>刘德华</div>
//   </div>
// );
// ReactDOM.render(newDiv, document.getElementById('app'));
// 3.JSX中使用JS代码
let username = '张学友';
const newObj = 
  <div>
    <h3>忘情冷雨夜</h3>
    <div>{{ username }}</div>
  </div>
;
ReactDOM.render(newObj, document.getElementById('app'));
