import axios from 'axios';
import { GOOGL_API_URL } from './constants';

export const googleApi = axios.create({
	baseURL: GOOGL_API_URL,
});
