import { useQuery } from '@tanstack/react-query';
import { API_KEY } from '../../../api/constants';
import { weatherApi } from '../../../api/weatherApi';
import { queryKeys } from '../../../react-query/constants';
import { CityData, CityDataApi, GetLocationQuery } from '../../../types/forecastType';

export const getLocationKey = async (geoString: string | undefined): Promise<CityDataApi> => {
	if (typeof geoString === 'undefined') {
		return Promise.reject(new Error('Invalid string'));
	} else {
		const res = await weatherApi.get('/locations/v1/cities/geoposition/search', {
			params: {
				apikey: API_KEY,
				q: geoString,
				toplevel: true,
			},
		});
		const data = await res.data;

		return data;
	}
};

export const useGetLocation = (geoString: string | undefined): GetLocationQuery => {
	console.log(geoString);

	const fallback: CityData = {
		key: 0,
		cityName: '',
		countryName: '',
	};
	const { data: cityData = fallback } = useQuery(
		[queryKeys.forecast, queryKeys.key],
		() => getLocationKey(geoString),
		{
			enabled: !!geoString,
			select: data => {
				{
					const key = data?.Key;
					const cityName = data?.LocalizedName;
					const countryName = data?.Country?.EnglishName;

					return { key, cityName, countryName };
				}
			},
		}
	);

	return { cityData };
};
