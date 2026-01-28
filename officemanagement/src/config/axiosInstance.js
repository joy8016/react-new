import axios from 'axios';

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: 'https://6974a517265838bbea95819d.mockapi.io/', // Base URL for all requests
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    
  },
});

export default api