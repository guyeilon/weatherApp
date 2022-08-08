import React from 'react';
import { useQuery, useMutation, useQueryClient, useQueries } from '@tanstack/react-query';
import { usePosition } from '../../hooks/usePosition';
import NoLocation from '../NoLocation';
import * as Styled from './styles';
import { getDailyForecast, getFiveDaysForecast, getHourlyForecast, getLocationKey } from '../../api/weatherApi';
import Loader from '../../assets/Loader';
import DailyForecast from '../DailyForecast';
import { getForecastIcon } from '../../constants';

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

	const icon = results[0].data?.DailyForecasts[0]?.Day?.Icon;
	const dailyTemp = results[0].data?.DailyForecasts[0]?.Temperature;

	console.log(results);
	console.log(dailyTemp);

	if (!isLocationServiceOn) {
		content = <NoLocation />;
	}

	if (isLoading && isLocationServiceOn) {
		content = <Loader />;
	}

	if (isSuccess) {
		content = (
			<>
				<DailyForecast cityName={cityName} icon={icon} dailyTemp={dailyTemp} />
			</>
		);
	}

	return <>{content}</>;
};

export default Forecast;
