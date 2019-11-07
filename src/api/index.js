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
      console.log(error);
    });
};
