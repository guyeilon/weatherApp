import { useQueries } from '@tanstack/react-query';
import { MAP_KEY } from '../../../api/constants';
import { googleApi } from '../../../api/googleApi';
import { queryKeys } from '../../../react-query/constants';
import { CityData } from '../../../types/forecastType';
import { GetLatLng } from '../../../types/mapTypes';

export const useGetLatLng = (citiesData: CityData[]) => {
	const googlApiCall = async (cityData: CityData): Promise<GetLatLng> => {
		if (typeof cityData === 'undefined') {
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

	const results = useQueries({
		queries: citiesData.map((city, idx) => {
			return {
				queryKey: [queryKeys.places, city.cityName],
				queryFn: () => googlApiCall(city),
				enabled: !!citiesData,
				select: (data: GetLatLng) => {
					{
						const location = data.results[0].geometry.location;
						const place = { cityData: city, location: location };

						return place;
					}
				},
			};
		}),
	});

	return results;
};
