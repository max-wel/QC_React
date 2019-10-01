import axios from 'axios';

const token = localStorage.getItem('token');
const baseURL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4000/api/v1';
const instance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${token}` }
});

export default {
  instance,
  get: instance.get,
  post: instance.post,
  patch: instance.patch
};
