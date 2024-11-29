import axios from 'axios';
import {BASE_URL} from '@env';

const apiHandler = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiHandler;
