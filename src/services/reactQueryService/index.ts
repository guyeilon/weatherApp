import { useQuery } from '@tanstack/react-query';
import { boolean } from 'yup';
import { getFiveDaysForecast, getHourlyForecast, getLocationKey } from '../../api/weatherApi';
import { dailyDataType, hourlyDataType } from './types';

export const useGetLocationQuery = (geoString: string | undefined) => {
	const { isSuccess: isGetLocationSuccess, data: LocationKey } = useQuery(
		['locationKey'],
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
	} = useQuery(['5daysForecast'], () => getFiveDaysForecast(key), {
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
		['12hoursForecast'],
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
