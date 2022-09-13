import axios from 'axios';
import { FORECAST_URL } from './constants';

export const weatherApi = axios.create({
	baseURL: FORECAST_URL,
});
