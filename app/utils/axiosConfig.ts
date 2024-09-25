// src/utils/axiosConfig.ts
import axios from 'axios';

// Get the base URL from environment variables
const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://192.168.2.12:8000'; // Fallback to localhost if not specified

// Create an axios instance with default settings
const axiosInstance = axios.create({
  baseURL: baseURL, // Base URL for your API
  headers: {
    'Content-Type': 'application/json', // Default Content-Type header
    Accept: 'application/json',         // Default Accept header
  },
  timeout: 5000, // Set a timeout (in ms) if needed
});

// Add an interceptor for request logging (optional)
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add an interceptor for handling responses (optional)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
