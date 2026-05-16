import axios from 'axios';

const localUrl = import.meta.env.VITE_LOCAL_URL;
const cloudUrl = import.meta.env.VITE_CLOUD_URL;
const useCloud = import.meta.env.VITE_USE_CLOUD === 'true';

export const API_BASE_URL = import.meta.env.PROD
  ? cloudUrl
  : (useCloud ? cloudUrl : localUrl);

export const api = axios.create({
  baseURL: API_BASE_URL || 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    return Promise.reject(error);
  }
);
