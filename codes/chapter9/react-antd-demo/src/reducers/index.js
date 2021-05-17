import { combineReducers } from 'redux';
import counter from './counter';
import eventReducer from './eventReducer';
import weather from './weather';
import userReducer from './user-reducer';

const allReducer = combineReducers({
  counter,
  eventReducer,
  weather,
  userReducer,
});

export default allReducer;
