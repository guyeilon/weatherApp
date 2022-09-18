import { useQueries, UseQueryResult } from '@tanstack/react-query';
import { queryKeys } from '../../../react-query/constants';
import { CityData, GetDailyForecast } from '../../../types/forecastType';
import { Location, MapData } from '../../../types/mapTypes';
import { getFiveDaysForecast } from '../../Forecasts/hooks/useDailyForecast';

export const useGetPlacesForecast = (
	places: UseQueryResult<
		{
			cityData: CityData;
			location: Location;
		},
		unknown
	>[]
): UseQueryResult<MapData, unknown>[] => {
	const results = useQueries({
		queries: places?.map(place => {
			return {
				queryKey: [queryKeys.forecast, queryKeys.daily, place?.data?.cityData.cityName],
				queryFn: () => getFiveDaysForecast(place?.data?.cityData.key),
				enabled: !!places,
				select: (data: GetDailyForecast[]) => {
					{
						const day = data[0]?.Temperature?.Maximum?.Value;
						const night = data[0]?.Temperature?.Minimum?.Value;
						const icon = data[0]?.Day.Icon;
						const mapData = {
							cityData: place.data?.cityData,
							location: place.data?.location,
							temperature: { day: day, night: night, icon: icon },
						};

						return mapData;
					}
				},
			};
		}),
	});

	return results;
};
