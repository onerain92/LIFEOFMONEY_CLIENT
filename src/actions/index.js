import {
  SAVE_USER,
  SAVE_RECIPIENT_LISTS,
  SAVE_SPENDING_EVENT_LISTS,
  SAVE_RECEIVED_EVENT_LISTS,
  SAVE_TOTAL_SPENDING_MONEY,
  SAVE_TOTAL_RECEIVED_MONEY
} from '../constants/actionTypes';

export const saveUser = user => ({
  type: SAVE_USER,
  user,
});

export const saveRecipientLists = list => ({
  type: SAVE_RECIPIENT_LISTS,
  list,
});

export const saveSpendingEventLists = list => ({
  type: SAVE_SPENDING_EVENT_LISTS,
  list,
});

export const saveReceivedEventLists = list => ({
  type: SAVE_RECEIVED_EVENT_LISTS,
  list,
});

export const totalSpendingMoney = money => ({
  type: SAVE_TOTAL_SPENDING_MONEY,
  money,
});

export const totalReceivedMoney = money => ({
  type: SAVE_TOTAL_RECEIVED_MONEY,
  money,
});
