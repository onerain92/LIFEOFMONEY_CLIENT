import {combineReducers} from 'redux';
import {SET_USER} from '../constants/actionTypes';

const initialState = {
  user: {},
};

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
};

export default lifeOfMoney = combineReducers({
  user: userReducer,
});
