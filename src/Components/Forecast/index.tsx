import React from 'react';
import { useQuery, useMutation, useQueryClient, useQueries } from '@tanstack/react-query';
import { usePosition } from '../../hooks/usePosition';
import NoLocation from '../NoLocation';
import * as Styled from './styles';
import { getDailyForecast, getFiveDaysForecast, getHourlyForecast, getLocationKey } from '../../api/weatherApi';
import Loader from '../../assets/Loader';
import DailyForecast from '../DailyForecast';

export interface ForecastProps {}

const Forecast: React.FC<ForecastProps> = Props => {
	const { error, ...position } = usePosition();

	// console.log(error);
	// console.log(position);

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
	console.log(key);

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
				enabled: !!key,
				retry: false,
			},
			{
				queryKey: ['5daysForecast'],
				queryFn: () => getFiveDaysForecast(key),
				staleTime: Infinity,
				enabled: !!key,
			},
		],
	});

	console.log(results);
	console.log(locationKey);

	if (!isLocationServiceOn) {
		content = <NoLocation />;
	}

	if (isLoading) {
		content = <Loader />;
	}

	if (isSuccess) {
		content = (
			<>
				<DailyForecast cityName={cityName} />
			</>
		);
	}

	return <>{content}</>;
};

export default Forecast;
