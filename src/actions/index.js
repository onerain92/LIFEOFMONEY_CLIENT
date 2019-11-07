import {SET_USER} from '../constants/actionTypes';

export const setUser = user => ({
  type: SET_USER,
  user,
});
