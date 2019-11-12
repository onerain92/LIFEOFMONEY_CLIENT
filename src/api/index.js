import axios from 'axios';

axios.defaults.withCredentials = true;
const api = axios.create({
  baseURL: 'http://localhost:4000',
});

export const getUser = token => {
  return api
    .post('/auth/facebook', {token})
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.error(error);
    });
};

export const createRecipient = (userId, recipient, relation) => {
  return api
    .post('/recipients', {userId, recipient, relation})
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.error(error);
    });
};

export const getRecipientLists = userId => {
  return api
    .get(`/recipients/${userId}`)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.error(error);
    });
};

export const createEvent = (userId, recipientId, eventType, amount) => {
  return api
    .post('/event', {userId, recipientId, eventType, amount})
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.error(error);
    });
};

export const getEvent = (userId, recipientId) => {
  return api
    .get(`/event/${userId}/${recipientId}`)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.error(error);
    });
};

export const getTotalMoney = userId => {
  return api
    .get(`event/${userId}`)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.error(error);
    });
};
