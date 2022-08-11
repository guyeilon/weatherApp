import React from 'react';
import { useQuery, useMutation, useQueryClient, useQueries } from '@tanstack/react-query';
import { usePosition } from '../../hooks/usePosition';
import NoLocation from '../NoLocation';
import * as Styled from './styles';
import { getDailyForecast, getFiveDaysForecast, getHourlyForecast, getLocationKey } from '../../api/weatherApi';
import Loader from '../../assets/Loader';
import DailyForecast from '../DailyForecast';
import useStore from '../../App/store';
import { getTime } from '../../utils';

export interface ForecastProps {}

const Forecast: React.FC<ForecastProps> = Props => {
	const { error, ...position } = usePosition();
	const store = useStore(state => state);
	const permission = store.permission;

	const isLocationServiceOn = Object.keys(position).length > 0;

	let content;
	let geoString: string;

	if (isLocationServiceOn) {
		geoString = `${position.latitude},${position.longitude}`;
	}

	const {
		isLoading,
		isError,
		isSuccess,
		error: err,
		data: locationKey,
	} = useQuery(['locationKey'], () => getLocationKey(geoString), {
		staleTime: Infinity,
		enabled: isLocationServiceOn === true,
	});
	const cityName = locationKey?.LocalizedName;

	const key = locationKey?.Key;

	const results = useQueries({
		queries: [
			{
				queryKey: ['dailyForecast'],
				queryFn: () => getDailyForecast(key),
				staleTime: Infinity,
				enabled: !!key,
			},
			{
				queryKey: ['HourlyForecast'],
				queryFn: () => getHourlyForecast(key),
				staleTime: Infinity,
				enabled: false,
			},
			{
				queryKey: ['5daysForecast'],
				queryFn: () => getFiveDaysForecast(key),
				staleTime: Infinity,
				enabled: false,
			},
		],
	});

	// data:
	const icon = results[0].data?.DailyForecasts[0]?.Day?.Icon;
	const dailyTemp = results[0].data?.DailyForecasts[0]?.Temperature;
	const dayPhrase = results[0].data?.DailyForecasts[0]?.Day.IconPhrase;
	const nightPhrase = results[0].data?.DailyForecasts[0]?.Night.IconPhrase;
	const timestamp = results[0].dataUpdatedAt;

	console.log(results[0]);

	if (!isLocationServiceOn || error) {
		content = <NoLocation />;
	}

	if (isLoading && (isLocationServiceOn || !error)) {
		content = <Loader />;
	}

	if (isSuccess) {
		content = (
			<>
				<DailyForecast
					cityName={cityName}
					icon={icon}
					dailyTemp={dailyTemp}
					dayPhrase={dayPhrase}
					nightPhrase={nightPhrase}
					timestamp={timestamp}
				/>
			</>
		);
	}

	return <>{content}</>;
};

export default Forecast;
