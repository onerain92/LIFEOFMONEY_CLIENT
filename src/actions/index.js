import {SAVE_USER, SAVE_RECIPIENT_LISTS} from '../constants/actionTypes';

export const saveUser = user => ({
  type: SAVE_USER,
  user,
});

export const saveRecipientLists = list => ({
  type: SAVE_RECIPIENT_LISTS,
  list,
});
