const userReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return { ...state, value: action.payload };
    case 'SET_LIST':
      return { ...state, list: action.payload };
  }
  return { ...state };
};

export default userReducer;
