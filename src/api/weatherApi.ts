import axios from 'axios';

const weatherApi = axios.create({
	baseURL: 'https://dataservice.accuweather.com',
});

const API_KEY = process.env.REACT_APP_API_KEY;

export const getLocationKey = async (geoString: string) => {
	const res = await weatherApi.get('/locations/v1/cities/geoposition/search', {
		params: {
			apikey: API_KEY,
			q: geoString,
		},
	});
	const data = await res.data;
	return data;
};

export const getDailyForecast = async (locationKey: string) => {
	const res = await weatherApi.get(`forecasts/v1/daily/1day/${locationKey}`, {
		params: {
			apikey: API_KEY,
		},
	});
	const data = await res.data;
	return data;
};
export const getHourlyForecast = async (locationKey: string) => {
	const res = await weatherApi.get(`forecasts/v1/hourly/24hour/${locationKey}`, {
		params: {
			apikey: API_KEY,
		},
	});
	const data = await res.data;
	return data;
};
export const getFiveDaysForecast = async (locationKey: string) => {
	const res = await weatherApi.get(`forecasts/v1/daily/5day/${locationKey}`, {
		params: {
			apikey: API_KEY,
		},
	});
	const data = await res.data;
	return data;
};
