import axios from 'axios';

// Get API base URL from environment variable
// In development: Vite proxy handles /api requests
// In production: Use VITE_API_URL or default to empty (relative path)
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

// Create axios instance with base URL
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

