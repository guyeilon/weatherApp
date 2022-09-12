import { useQuery } from '@tanstack/react-query';
import { API_KEY } from '../../../api/constants';
import { weatherApi } from '../../../api/weatherApi';
import { queryKeys } from '../../../react-query/constants';
import { GetDailyForecast, DailyQuery, DailyData } from '../../../types/forecastType';

export const getFiveDaysForecast = async (locationKey: number | undefined): Promise<GetDailyForecast[]> => {
	if (typeof locationKey === 'undefined') {
		return Promise.reject(new Error('Invalid key'));
	}
	const res = await weatherApi.get(`forecasts/v1/daily/5day/${locationKey}`, {
		params: {
			apikey: API_KEY,
			details: true,
		},
	});
	const data = await res.data;

	return data.DailyForecasts;
};

export const useDailyForecast = (key: number | undefined, cityName: string | undefined): DailyQuery => {
	const fallback: DailyData[] = [];
	const {
		data: fiveDaysData = fallback,
		dataUpdatedAt: updatedAt,
		isSuccess,
	} = useQuery([queryKeys.forecast, queryKeys.daily, cityName, key], () => getFiveDaysForecast(key), {
		enabled: !!key,
		select: fiveDaysData => {
			const days = fiveDaysData.map(day => {
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
