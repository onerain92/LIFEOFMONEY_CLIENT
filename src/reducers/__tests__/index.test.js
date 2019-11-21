import userReducer from '../../reducers/index';
import recipientListsReducer from '../../reducers/index';
import spendingEventListsReducer from '../../reducers/index';
import totalReceivedMoneyReducer from '../../reducers/index';

import {
  SAVE_USER,
  SAVE_RECIPIENT_LISTS,
  SAVE_SPENDING_EVENT_LISTS,
  SAVE_TOTAL_RECEIVED_MONEY,
} from '../../constants/actionTypes';

describe('reducers test', () => {
  describe('userReducer', () => {
    const initialState = {
      user: {},
    };

    let state = userReducer(initialState, {});

    it('should return initialState', () => {
      expect(state.user).toEqual({});
    });

    it('should return object', () => {
      state = userReducer(initialState.user, {
        type: SAVE_USER,
        user: {
          id: '6237419232387',
          email: 'test@test.com',
          username: 'test',
          picture: 'https://www.test.com',
        },
      });
      expect(typeof state.user).toBe('object');
    });

    it('should return user information', () => {
      state = userReducer(initialState.user, {
        type: SAVE_USER,
        user: {
          id: '6237419232387',
          email: 'test@test.com',
          username: 'test',
          picture: 'https://www.test.com',
        },
      });
      expect(state.user).toHaveProperty('username');
    });
  });

  describe('recipientListsReducer', () => {
    const initialState = {
      recipientLists: [],
    };

    let state = recipientListsReducer(initialState, {});

    it('should return initialState', () => {
      expect(state.recipientLists).toEqual([]);
    });

    it('should return array and have spendMoney property', () => {
      state = recipientListsReducer(initialState.recipientLists, {
        type: SAVE_RECIPIENT_LISTS,
        list: [
          {
            recipientId: '1973423453234',
            name: '테스트',
            relation: '친구',
            spendMoney: 50000,
            receivedMoney: 50000,
          },
        ],
      });
      expect(Array.isArray(state.recipientLists)).toBe(true);
      expect(state.recipientLists[0]).toHaveProperty('spendMoney');
    });
  });

  describe('spendingEventListsReducer', () => {
    const initialState = {
      spendingEventLists: [],
    };

    let state = spendingEventListsReducer(initialState, {});

    it('should return initialState', () => {
      expect(state.spendingEventLists).toEqual([]);
    });

    it('should return array and have spendMoney property', () => {
      state = spendingEventListsReducer(initialState.spendingEventLists, {
        type: SAVE_SPENDING_EVENT_LISTS,
        list: [
          {
            recipientId: '1973423453234',
            name: '테스트',
            relation: '친구',
            spendMoney: 50000,
            receivedMoney: 50000,
          },
        ],
      });
      expect(Array.isArray(state.spendingEventLists)).toBe(true);
      expect(state.spendingEventLists[0]).toHaveProperty('spendMoney');
    });
  });

  describe('totalReceivedMoneyReducer', () => {
    const initialState = {
      totalReceivedMoney: 0,
    };

    let state = totalReceivedMoneyReducer(initialState, {});

    it('should return initialState', () => {
      expect(state.totalReceivedMoney).toEqual(0);
    });

    it('should return total recevied money', () => {
      state = totalReceivedMoneyReducer(initialState.totalReceivedMoney, {
        type: SAVE_TOTAL_RECEIVED_MONEY,
        money: 50000,
      });

      expect(typeof state.totalReceivedMoney).toBe('number');
      expect(state.totalReceivedMoney).toEqual(50000);
    });
  });
});
