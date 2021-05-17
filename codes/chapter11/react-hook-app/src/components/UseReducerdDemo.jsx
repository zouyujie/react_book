import React, { useReducer } from 'react';

const initialState = { count: 100 };
function reducer(state, action) {
  switch (action.type) {
    case 'doIt':
      return { count: state.count + 8, user: '不败顽童-古三通' };
    default:
      throw new Error();
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        {state.user}太湖一役，击败{state.count}位高手
      </div>
      <button onClick={() => dispatch({ type: 'doIt' })}>太湖一役</button>
    </div>
  );
};
