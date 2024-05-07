import axios from 'axios';
import {apiURL} from './apiURL';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosClient = axios.create({
  baseURL: apiURL,
});

axiosClient.interceptors.request.use(async config => {
  // const token = localStorage.getItem('ACCESS_TOKEN');
  const token = await AsyncStorage.getItem('token');
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
