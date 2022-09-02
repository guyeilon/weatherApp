import { useQuery } from '@tanstack/react-query';
import { API_KEY } from '../../../api/constants';
import { weatherApi } from '../../../api/weatherApi';
import { queryKeys } from '../../../react-query/constants';
import { LocationKey } from '../../../types/forecastType';

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

export const useGetLocation = (geoString: string | undefined): LocationKey => {
	const fallback = {};
	const { data: LocationKey = fallback } = useQuery(
		[queryKeys.forecast, queryKeys.locationKey],
		() => getLocationKey(geoString),
		{
			enabled: Boolean(geoString),
		}
	);

	const localCityName = LocationKey?.LocalizedName;
	const localCityKey = LocationKey?.Key;

	return {
		localCityName,
		localCityKey,
	};
};
