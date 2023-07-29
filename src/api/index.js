import axios from 'axios';
import vuex from '@/store'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer ' + vuex.state.user.api_token
  return config;
});

export default apiClient;
