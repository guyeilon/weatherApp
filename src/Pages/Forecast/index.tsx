import React, { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient, useQueries } from '@tanstack/react-query';
import { usePosition } from '../../hooks/usePosition';
import NoLocation from '../../Components/NoLocation';
import * as Styled from './styles';
import { getFiveDaysForecast, getHourlyForecast, getLocationKey } from '../../api/weatherApi';
import Loader from '../../assets/Loader';
import DailyForecast from '../../Components/DailyForecast';

import WeeklyForecast from '../../Components/WeeklyForecast';

import HourlyForecast from '../../Components/HourlyForecast';
import FiveDaysForecast from '../../Components/FiveDaysForecast';
import { dataType, hourlyDataType } from './types';

export interface ForecastProps {}

const Forecast: React.FC<ForecastProps> = Props => {
	const { error, ...position } = usePosition();
	const isLocationServiceOn = Object.keys(position).length > 0;

	let content;
	let geoString = `${position.latitude},${position.longitude}`;

	// console.log(position);
	// console.log(isLocationServiceOn);
	// console.log(geoString);

	const {
		isLoading: isGetLocationLoading,
		isError,
		isSuccess: isGetLocationSuccess,
		error: err,
		data: LocationKey,
	} = useQuery(['locationKey'], () => getLocationKey(geoString), {
		staleTime: Infinity,
		enabled: isLocationServiceOn,
	});
	const cityName = LocationKey?.LocalizedName;

	const key = LocationKey?.Key;

	const {
		isLoading: isDailyLoading,
		// isError: isForecastError,
		isSuccess: isDailySuccess,
		data: fiveDaysData,
		dataUpdatedAt: updatedAt,
	} = useQuery(['5daysForecast'], () => getFiveDaysForecast(key), {
		staleTime: Infinity,
		enabled: !!key,
		select: fiveDaysData => {
			const days = fiveDaysData.DailyForecasts.map((day: dataType) => {
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
	const {
		isLoading: isHourlyLoading,
		isError: isHourlyError,
		isSuccess: isHourlySuccess,
		error: hourlyError,
		data: hourlyData,
	} = useQuery(['12hoursForecast'], () => getHourlyForecast(key), {
		staleTime: Infinity,
		enabled: !!key,
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
	});

	console.log('position', position);
	console.log('isGetLocationLoading', isGetLocationLoading);
	console.log('isGetLocationSuccess', isGetLocationSuccess);
	console.log('key', key);
	console.log('hourlyData', hourlyData);
	console.log('fiveDaysData', fiveDaysData);
	console.log('isDailyLoading', isDailyLoading);
	console.log('isHourlySuccess', isHourlySuccess);
	console.log('isHourlyError', isHourlySuccess);
	console.log('hourlyError', hourlyError);

	// console.log('error:', error);
	// console.log('isLocationServiceOn:', isLocationServiceOn);
	if (!isGetLocationSuccess || error || !isLocationServiceOn) {
		content = <NoLocation />;
	}

	if (isHourlyLoading && isDailyLoading) {
		content = <Loader />;
	}

	if (isDailySuccess && isHourlySuccess) {
		content = (
			<div>
				<DailyForecast fiveDaysData={fiveDaysData} updatedAt={updatedAt} cityName={cityName} />
				<WeeklyForecast fiveDaysData={fiveDaysData} />
				<HourlyForecast hourlyData={hourlyData} />
				{fiveDaysData && <FiveDaysForecast fiveDaysData={fiveDaysData} />}
			</div>
		);
	}

	return <Styled.ContentWrapper>{content}</Styled.ContentWrapper>;
};

export default Forecast;
