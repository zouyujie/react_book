// 1.导入包
import React from 'react';
// 把组件暴露出去
export default function Msg(props) {
  return (
    <div>
      {props.username}：{props.song}
    </div>
  );
}
