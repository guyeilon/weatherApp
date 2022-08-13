import React from 'react';
import { useQuery, useMutation, useQueryClient, useQueries } from '@tanstack/react-query';
import { usePosition } from '../../hooks/usePosition';
import NoLocation from '../NoLocation';
import * as Styled from './styles';
import { getDailyForecast, getFiveDaysForecast, getHourlyForecast, getLocationKey } from '../../api/weatherApi';
import Loader from '../../assets/Loader';
import DailyForecast from '../DailyForecast';
import useStore from '../../App/store';
import WeeklyForecast from '../WeeklyForecast';
import { dataType } from '../DailyForecast/types';

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
		console.log(geoString);
	}
	console.log(position);

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
				queryKey: ['5daysForecast'],
				queryFn: () => getFiveDaysForecast(key),
				staleTime: Infinity,
				cacheTime: Infinity,
				enabled: !!key,
			},
			// {
			// 	queryKey: ['dailyForecast'],
			// 	queryFn: () => getDailyForecast(key),
			// 	staleTime: Infinity,
			// 	enabled: false,
			// },
			{
				queryKey: ['HourlyForecast'],
				queryFn: () => getHourlyForecast(key),
				staleTime: Infinity,
				cacheTime: Infinity,
				enabled: !!key,
			},
		],
	});

	// get forecast data:

	const getData = (dayInx: number): dataType => {
		const icon = results[0].data?.DailyForecasts[dayInx]?.Day?.Icon;
		const dayTemp = results[0].data?.DailyForecasts[dayInx]?.Temperature?.Maximum?.Value;
		const nightTemp = results[0].data?.DailyForecasts[dayInx]?.Temperature?.Minimum?.Value;
		const dayPhrase = results[0].data?.DailyForecasts[dayInx]?.Day.IconPhrase;
		const nightPhrase = results[0].data?.DailyForecasts[dayInx]?.Night.IconPhrase;
		const timestamp = results[0].dataUpdatedAt;
		const date = results[0].data?.DailyForecasts[dayInx]?.EpochDate;

		return { icon, dayTemp, nightTemp, dayPhrase, nightPhrase, timestamp, date };
	};

	console.log(results);

	if (!isLocationServiceOn || error) {
		content = <NoLocation />;
	}

	if (isLoading && isLocationServiceOn && !error) {
		content = <Loader />;
	}

	if (isSuccess) {
		content = (
			<div>
				<DailyForecast getData={getData} cityName={cityName} />
				<WeeklyForecast getData={getData} />
			</div>
		);
	}

	return <Styled.ContentWrapper>{content}</Styled.ContentWrapper>;
};

export default Forecast;
