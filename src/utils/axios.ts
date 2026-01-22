import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Create axios instance with base configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000',
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  timeout: 10000, 
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // You can modify request config here (add auth tokens, etc.)
    const token = localStorage.getItem('token'); // For client-side
    // Or use cookies for server-side
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized!');
    }
    
    if (error.response?.status === 500) {
      console.error('Server error!');
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;