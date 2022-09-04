import { useQuery } from '@tanstack/react-query';
import { API_KEY } from '../../../api/constants';
import { weatherApi } from '../../../api/weatherApi';
import { queryKeys } from '../../../react-query/constants';
import { GetDailyForecast, ReturnDailyForecast } from '../../../types/forecastType';

export const getFiveDaysForecast = async (locationKey: number | undefined) => {
	if (typeof locationKey === 'undefined') {
		console.log('Invalid city key');
		return;
	}
	const res = await weatherApi.get(`forecasts/v1/daily/5day/${locationKey}`, {
		params: {
			apikey: API_KEY,
			details: true,
		},
	});
	const data = await res.data;
	return data;
};

export const useDailyForecast = (key: number | undefined, cityName: string | undefined): ReturnDailyForecast => {
	const fallback = [{}];
	const {
		data: fiveDaysData = fallback,
		dataUpdatedAt: updatedAt,
		isSuccess,
	} = useQuery([queryKeys.forecast, queryKeys.daily, cityName, key], () => getFiveDaysForecast(key), {
		staleTime: Infinity,
		cacheTime: Infinity,
		enabled: Boolean(key),
		select: fiveDaysData => {
			const days = fiveDaysData.DailyForecasts.map((day: GetDailyForecast) => {
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
		fiveDaysData,
		updatedAt,
		isSuccess,
	};
};
