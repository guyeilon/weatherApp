import axios from 'axios';

const weatherApi = axios.create({
	baseURL: 'http://dataservice.accuweather.com',
});

export const getLocationKey = async (geoString: string) => {
	const res = await weatherApi.get('/locations/v1/cities/geoposition/search', {
		params: {
			// apikey: 'W6EwFbm24M1VCTf6e03m3u0U3kjsM66x',
			apikey: 'Alh18uFM0BXPi8OTl1dg9E5KbeLiDKec',
			q: geoString,
		},
	});
	const data = await res.data;
	return data;
};

export const getDailyForecast = async (locationKey: string) => {
	const res = await weatherApi.get(`forecasts/v1/daily/1day/${locationKey}`, {
		params: {
			// apikey: 'W6EwFbm24M1VCTf6e03m3u0U3kjsM66x',
			apikey: 'Alh18uFM0BXPi8OTl1dg9E5KbeLiDKec',
		},
	});
	const data = await res.data;
	return data;
};
export const getHourlyForecast = async (locationKey: string) => {
	const res = await weatherApi.get(`forecasts/v1/hourly/24hour/${locationKey}`, {
		params: {
			apikey: 'W6EwFbm24M1VCTf6e03m3u0U3kjsM66x',
			// apikey: 'Alh18uFM0BXPi8OTl1dg9E5KbeLiDKec',
		},
	});
	const data = await res.data;
	return data;
};
export const getFiveDaysForecast = async (locationKey: string) => {
	const res = await weatherApi.get(`forecasts/v1/daily/1day/${locationKey}`, {
		params: {
			// apikey: 'W6EwFbm24M1VCTf6e03m3u0U3kjsM66x',
			apikey: 'Alh18uFM0BXPi8OTl1dg9E5KbeLiDKec',
		},
	});
	const data = await res.data;
	return data;
};
