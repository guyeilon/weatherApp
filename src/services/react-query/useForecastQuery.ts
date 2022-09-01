import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getAutocompleteCityName, getFiveDaysForecast, getHourlyForecast, getLocationKey } from '../../api/weatherApi';
import useDebounce from '../../hooks/useDebounce';
import { queryKeys } from './constants';
import { cityDataType, dailyDataType, hourlyDataType } from './types';

export const useGetLocationQuery = (geoString: string | undefined) => {
	const { isSuccess: isGetLocationSuccess, data: LocationKey } = useQuery(
		[queryKeys.locationKey],
		() => getLocationKey(geoString),
		{
			staleTime: Infinity,
			cacheTime: Infinity,
			enabled: Boolean(geoString),
		}
	);

	const cityName = LocationKey?.LocalizedName;

	const cityKey = LocationKey?.Key;

	return {
		isGetLocationSuccess,
		cityName,
		cityKey,
	};
};

export const useGetDailyQuery = (key: number | undefined) => {
	const {
		isSuccess: isDailySuccess,
		data: fiveDaysData,
		dataUpdatedAt: updatedAt,
	} = useQuery([queryKeys.dailyForecast], () => getFiveDaysForecast(key), {
		staleTime: Infinity,
		cacheTime: Infinity,
		enabled: Boolean(key),
		select: fiveDaysData => {
			const days = fiveDaysData.DailyForecasts.map((day: dailyDataType) => {
				const icon = day?.Day?.Icon;
				const dayTemp = day?.Temperature?.Maximum?.Value;
				const nightTemp = day?.Temperature?.Minimum?.Value;
				const dayPhrase = day?.Day?.IconPhrase;
				const nightPhrase = day?.Night?.IconPhrase;
				const date = day?.EpochDate;

				return { icon, dayTemp, nightTemp, dayPhrase, nightPhrase, date };
			});

			return days;
		},
	});

	return {
		isDailySuccess,
		fiveDaysData,
		updatedAt,
	};
};

export const useGetHourlyQuery = (key: number | undefined) => {
	const { isSuccess: isHourlySuccess, data: hourlyData } = useQuery(
		[queryKeys.hourlyForecast],
		() => getHourlyForecast(key),
		{
			staleTime: Infinity,
			enabled: Boolean(key),
			select: hourlyData => {
				const hours = hourlyData.map((hour: hourlyDataType) => {
					const icon = hour?.WeatherIcon;
					const temp = hour?.Temperature?.Value;
					const wind = hour?.Wind?.Speed?.Value;
					const date = hour?.DateTime;

					return { icon, temp, wind, date };
				});

				return hours;
			},
		}
	);

	return {
		isHourlySuccess,
		hourlyData,
	};
};
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
