import React, { useState } from 'react';

export default () => {
  /**
   * count：状态数据
   * setCount：修改状态的方法
   * useState中的参数：是状态数据的默认值
   */
  const [count, setCount] = useState(100);
  const [user, setUser] = useState('不败顽童-古三通');
  return (
    <div>
      <div>
        {user}太湖一役，击败{count}位高手
      </div>
      <button onClick={() => setCount(count + 8)}>太湖一役</button>
    </div>
  );
};
