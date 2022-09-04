import axios from 'axios';
import { accuweatherUrl, API_KEY } from './constants';

export const weatherApi = axios.create({
	baseURL: accuweatherUrl,
});

// export const getFiveDaysForecast = async (locationKey: number | undefined) => {
// 	if (typeof locationKey === 'undefined') {
// 		console.log('Invalid city key');
// 		return;
// 	}
// 	const res = await weatherApi.get(`forecasts/v1/daily/5day/${locationKey}`, {
// 		params: {
// 			apikey: API_KEY,
// 			details: true,
// 		},
// 	});
// 	const data = await res.data;
// 	return data;
// };
export const getAutocompleteCityName = async (q: string | undefined) => {
	if (typeof q === 'undefined') {
		console.log('can not get search term...');
		return;
	}
	const res = await weatherApi.get(`/locations/v1/cities/autocomplete`, {
		params: {
			apikey: API_KEY,
			q: q,
		},
	});
	const data = await res.data;
	return data;
};
