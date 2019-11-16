import {combineReducers} from 'redux';
import {
  SAVE_USER,
  SAVE_RECIPIENT_LISTS,
  SAVE_SPENDING_EVENT_LISTS,
  SAVE_RECEIVED_EVENT_LISTS,
  SAVE_TOTAL_SPEND_MONEY,
  SAVE_TOTAL_RECEIVED_MONEY,
} from '../constants/actionTypes';

const initialState = {
  user: {},
  recipientLists: [],
  spendingEventLists: [],
  receivedEventLists: [],
  totalSpendMoney: 0,
  totalReceivedMoney: 0,
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

const spendingEventListsReducer = (
  state = initialState.spendingEventLists,
  action,
) => {
  switch (action.type) {
    case SAVE_SPENDING_EVENT_LISTS:
      return action.list;
    default:
      return state;
  }
};

const receivedEventListsReducer = (
  state = initialState.receivedEventLists,
  action,
) => {
  switch (action.type) {
    case SAVE_RECEIVED_EVENT_LISTS:
      return action.list;
    default:
      return state;
  }
};

const totalSpendMoneyReducer = (
  state = initialState.totalSpendMoney,
  action,
) => {
  switch (action.type) {
    case SAVE_TOTAL_SPEND_MONEY:
      return action.money;
    default:
      return state;
  }
};

const totalReceivedMoneyReducer = (
  state = initialState.totalReceivedMoney,
  action,
) => {
  switch (action.type) {
    case SAVE_TOTAL_RECEIVED_MONEY:
      return action.money;
    default:
      return state;
  }
};

const lifeOfMoney = combineReducers({
  user: userReducer,
  recipientLists: recipientListsReducer,
  spendingEventLists: spendingEventListsReducer,
  receivedEventLists: receivedEventListsReducer,
  totalSpendMoney: totalSpendMoneyReducer,
  totalReceivedMoney: totalReceivedMoneyReducer,
});

export default lifeOfMoney;
