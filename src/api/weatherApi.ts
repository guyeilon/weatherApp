import axios from 'axios';

const weatherApi = axios.create({
	baseURL: 'https://dataservice.accuweather.com',
});

let API_KEY = process.env.REACT_APP_API_KEY1;

const toggleApis = (api: string | undefined) => {
	if (api === process.env.REACT_APP_API_KEY1) {
		API_KEY = process.env.REACT_APP_API_KEY2;
		return;
	} else if (api === process.env.REACT_APP_API_KEY2) {
		API_KEY = process.env.REACT_APP_API_KEY3;
		return;
	}
	API_KEY = process.env.REACT_APP_API_KEY1;
};

export const getLocationKey = async (geoString: string) => {
	try {
		const res = await weatherApi.get('/locations/v1/cities/geoposition/search', {
			params: {
				apikey: API_KEY,
				q: geoString,
			},
		});

		const data = await res.data;
		return data;
	} catch (error: any) {
		if (error && error.name === 'AxiosError') {
			toggleApis(API_KEY);
		}
	}
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
	const res = await weatherApi.get(`forecasts/v1/hourly/12hour/${locationKey}`, {
		params: {
			apikey: API_KEY,
			details: true,
		},
	});
	const data = await res.data;
	return data;
};
export const getFiveDaysForecast = async (locationKey: string) => {
	const res = await weatherApi.get(`forecasts/v1/daily/5day/${locationKey}`, {
		params: {
			apikey: API_KEY,
			details: true,
		},
	});
	const data = await res.data;
	return data;
};
export const getAutocompleteResults = async (q: string) => {
	const res = await weatherApi.get(`/locations/v1/cities/autocomplete`, {
		params: {
			apikey: API_KEY,
			q: q,
		},
	});
	const data = await res.data;
	return data;
};
