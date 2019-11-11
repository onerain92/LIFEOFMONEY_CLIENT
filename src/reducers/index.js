import {combineReducers} from 'redux';
import {SAVE_USER, SAVE_RECIPIENT_LISTS} from '../constants/actionTypes';

const initialState = {
  user: {},
  recipientLists: [],
};

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case SAVE_USER:
      return action.user;
    default:
      return state;
  }
};

const recipientListsReducer = (state = initialState.recipientLists, action) => {
  switch (action.type) {
    case SAVE_RECIPIENT_LISTS:
      return action.list;
    default:
      return state;
  }
};

export default lifeOfMoney = combineReducers({
  user: userReducer,
  recipientLists: recipientListsReducer,
});
