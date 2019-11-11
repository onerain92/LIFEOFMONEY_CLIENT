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
