import { useQuery, useQueryClient } from '@tanstack/react-query';
import { API_KEY } from '../../../api/constants';
import { weatherApi } from '../../../api/weatherApi';
import useDebounce from '../../../hooks/useDebounce';
import { queryKeys } from '../../../react-query/constants';
import { SearchCityApi, CityData, SearchQuery } from '../../../types/forecastType';

const getAutocompleteCityName = async (q: string | undefined): Promise<SearchCityApi[]> => {
	if (typeof q === 'undefined') {
		return Promise.reject(new Error('Invalid search'));
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

export const useAutocompleteResult = (search: string | undefined): SearchQuery => {
	const client = useQueryClient();
	const debouncedSearch = useDebounce(search, 0);
	// const prevSearchedData = client.getQueryData(['Autocomplete', search], { exact: true });
	const fallback: CityData[] = [];
	const {
		data: citiesData = fallback,
		isLoading,
		isFetched,
	} = useQuery(
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
				const cities = citiesData.map(city => {
					const key = city?.Key;
					const countryName = city?.Country?.LocalizedName;
					const cityName = city?.LocalizedName;

					return { key, countryName, cityName };
				});

				return cities;
			},
		}
	);

	return {
		citiesData,
		isLoading,
		isFetched,
		// prevSearchedData,
	};
};
