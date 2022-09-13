import { googleApi } from '../../../api/googleApi';
import { CityData } from '../../../types/forecastType';
const MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

export const useGetLatLan = (citiesData: CityData[]) => {
	if (citiesData.length === 0) return;
	const googlApiCall = async (cityData: CityData) => {
		if (typeof citiesData === 'undefined') {
			return Promise.reject(new Error('Invalid string'));
		} else {
			const { data } = await googleApi.get('maps/api/geocode/json', {
				params: {
					key: MAP_KEY,
					address: `${cityData.cityName} ${cityData.countryName}`,
				},
			});

			return data;
		}
	};

	const geoCodesData: any = [];
	citiesData.map(city => {
		const data = googlApiCall(city);
		geoCodesData.push(data);
	});

	return geoCodesData;
};
