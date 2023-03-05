import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7015'
});

export default api;