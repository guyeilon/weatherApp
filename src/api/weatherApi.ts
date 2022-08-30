import axios from 'axios';

const weatherApi = axios.create({
	baseURL: 'https://dataservice.accuweather.com',
});

const API_KEY = process.env.REACT_APP_API_KEY;

export const getLocationKey = async (geoString: string | undefined) => {
	if (typeof geoString === 'undefined') {
		console.log('Invalid geolocation position');
		return;
	}
	const res = await weatherApi.get('/locations/v1/cities/geoposition/search', {
		params: {
			apikey: API_KEY,
			q: geoString,
		},
	});
	const data = await res.data;
	return data;
};

export const getHourlyForecast = async (locationKey: number | undefined) => {
	if (typeof locationKey === 'undefined') {
		console.log('Invalid city key');
		return;
	}
	const res = await weatherApi.get(`forecasts/v1/hourly/12hour/${locationKey}`, {
		params: {
			apikey: API_KEY,
			details: true,
		},
	});
	const data = await res.data;
	return data;
};
export const getFiveDaysForecast = async (locationKey: number | undefined) => {
	if (typeof locationKey === 'undefined') {
		console.log('Invalid city key');
		return;
	}
	const res = await weatherApi.get(`forecasts/v1/daily/5day/${locationKey}`, {
		params: {
			apikey: API_KEY,
			details: true,
		},
	});
	const data = await res.data;
	return data;
};
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
