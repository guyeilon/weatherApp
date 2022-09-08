import { useQuery } from '@tanstack/react-query';
import { API_KEY } from '../../../api/constants';
import { weatherApi } from '../../../api/weatherApi';
import { queryKeys } from '../../../react-query/constants';
import { GetHourlyForecast, ReturnHourlyForecast } from '../../../types/forecastType';

export const getHourlyForecast = async (locationKey: number | undefined) => {
	if (typeof locationKey === 'undefined') {
		console.log('Invalid city key');
		return;
	}
	const res = await weatherApi.get(`forecasts/v1/hourly/12hour/${locationKey}`, {
		params: {
			apikey: API_KEY,
			details: true,
		},
	});
	const data = await res.data;
	return data;
};

export const useGetHourlyForecast = (key: number | undefined, cityName: string | undefined): ReturnHourlyForecast => {
	const fallback = [{}];
	const { data: hourlyData = fallback, isSuccess } = useQuery(
		[queryKeys.forecast, queryKeys.hourly, cityName, key],
		() => getHourlyForecast(key),
		{
			staleTime: Infinity,
			enabled: !!key,
			select: hourlyData => {
				const hours = hourlyData.map((hour: GetHourlyForecast) => {
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
		hourlyData,
		isSuccess,
	};
};
