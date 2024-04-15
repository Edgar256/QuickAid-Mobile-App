import axios from 'axios';
import {apiURL} from './apiURL';

const axiosClient = axios.create({
  baseURL: apiURL,
});

axiosClient.interceptors.request.use(config => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  response => {
    // On FulFilled
    return response;
  },
  error => {
    // On Rejected
    const {response} = error;
    if (response.status === 401) {
      localStorage.clear();
    }
    throw error;
  },
);

export default axiosClient;
