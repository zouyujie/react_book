// 1. 导入包
import React from 'react';
import ReactDOM from 'react-dom';

// 2. 第一种创建组件的方式
// function Msg () {
//     return <div>Msg 组件</div>
// }
function Msg(props) {
  return (
    <div>
      {props.username}：{props.song}
    </div>
  );
}
const user = {
  username: '许冠杰',
  song: '《沧海一声笑》',
};
// 3. 调用 render 函数渲染

ReactDOM.render(
  // <Msg username={user.username} song={user.song}></Msg>,
<Msg {...user}></Msg>,
document.getElementById('app'));
