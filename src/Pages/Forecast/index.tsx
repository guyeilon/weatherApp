import React, { useEffect, useState } from 'react';
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
import Modal from '../../Common/Modal';

export interface ForecastProps {}

const Forecast: React.FC<ForecastProps> = Props => {
	const { error, ...position } = usePosition();
	const isLocationServiceOn = Object.keys(position).length > 0;

	let content;
	let geoString = `${position.latitude},${position.longitude}`;

	const {
		isLoading: isGetLocationLoading,
		isSuccess: isGetLocationSuccess,
		error: err,
		data: LocationKey,
		isFetching: isGetLocationFetching,
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

	if (!isGetLocationFetching && !isLocationServiceOn) {
		content = <NoLocation />;
	}

	if (isGetLocationFetching) {
		content = <Loader />;
	}

	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	if (isDailySuccess && isHourlySuccess) {
		content = (
			<div>
				<DailyForecast fiveDaysData={fiveDaysData} updatedAt={updatedAt} cityName={cityName} />
				<WeeklyForecast fiveDaysData={fiveDaysData} />
				<Styled.btnWrapper>
					<Styled.forecastBtn
						ghost
						onClick={() => {
							setIsExpanded(true);
						}}>
						5 Days Forecast
					</Styled.forecastBtn>
				</Styled.btnWrapper>
				<HourlyForecast hourlyData={hourlyData} />

				<Styled.HideInMobileWrapper>
					<FiveDaysForecast fiveDaysData={fiveDaysData} />
				</Styled.HideInMobileWrapper>
				{isExpanded && (
					<Modal
						padding='40px 30px'
						width='100%'
						height='511px'
						position='bottom'
						isModalOpen={isExpanded}
						closeModal={() => setIsExpanded(false)}>
						<FiveDaysForecast fiveDaysData={fiveDaysData} isExpanded={isExpanded} />
					</Modal>
				)}
			</div>
		);
	}

	return <Styled.ContentWrapper>{content}</Styled.ContentWrapper>;
};

export default Forecast;
