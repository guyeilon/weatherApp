import axios from 'axios';
import { API_KEY, FORECAST_URL } from './constants';

export const weatherApi = axios.create({
	baseURL: FORECAST_URL,
});
