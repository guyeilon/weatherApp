import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getAutocompleteCityName } from '../api/weatherApi';
import useDebounce from '../hooks/useDebounce';
import { queryKeys } from './constants';
import { cityDataType, hourlyDataType } from './types';

export const useGetCityQuery = (search: string | undefined) => {
	const client = useQueryClient();
	const debouncedSearch = useDebounce(search, 0);
	// const prevSearchedData = client.getQueryData(['Autocomplete', search], { exact: true });

	const { data: citiesData, isLoading } = useQuery(
		// ['Autocomplete', prevSearchedData ? search : debouncedSearch],
		// ['Autocomplete' debouncedSearch],
		[queryKeys.Autocomplete, debouncedSearch],
		// () => getAutocompleteCityName(prevSearchedData ? search : debouncedSearch),
		() => getAutocompleteCityName(debouncedSearch),
		{
			enabled: Boolean(search),
			cacheTime: Infinity,
			staleTime: Infinity,
			select: citiesData => {
				const cities = citiesData.map((city: cityDataType) => {
					const cityKey = city?.Key;
					const countryName = city?.Country?.LocalizedName;
					const cityName = city?.LocalizedName;

					return { cityKey, countryName, cityName };
				});

				return cities;
			},
		}
	);

	// if (search === '') {
	// 	console.log('delete search...');
	// 	return {
	// 		citiesData: [],
	// 		isLoading: false,
	// 	};
	// } else {
	return {
		citiesData,
		isLoading,
		// prevSearchedData,
	};
	// }
};
