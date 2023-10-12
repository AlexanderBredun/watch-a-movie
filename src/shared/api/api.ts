import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const instance = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api', 
    headers: {
        'X-API-KEY': import.meta.env.VITE_API_KEY,
        'Content-Type': 'application/json',
    }
});

export const $api = setupCache(instance);
