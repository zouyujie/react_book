import React, { useState, useEffect } from 'react';
export default () => {
  const [count, setCount] = useState(0);
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    //更新浏览器标题
    document.title = `你点击了${count}次`;
  });
  return (
    <div>
      <div>你点击了{count}次</div>
      <button onClick={() => setCount(count + 1)}>添加</button>
    </div>
  );
};
