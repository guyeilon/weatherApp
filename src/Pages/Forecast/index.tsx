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
import { useGetDailyQuery, useGetHourlyQuery, useGetLocationQuery } from '../../services/reactQueryService';
import Clouds from '../../Components/Clouds';

export interface ForecastProps {}

const Forecast: React.FC<ForecastProps> = Props => {
	const { error, ...position } = usePosition();
	const isLocationServiceOn = Object.keys(position).length > 0;

	let content;
	let geoString = isLocationServiceOn ? `${position.latitude},${position.longitude}` : undefined;

	const { isGetLocationSuccess, cityName, cityKey } = useGetLocationQuery(geoString);
	const { isDailySuccess, fiveDaysData, updatedAt } = useGetDailyQuery(cityKey);
	const { isHourlySuccess, hourlyData } = useGetHourlyQuery(cityKey);

	if (!isLocationServiceOn) {
		content = <NoLocation />;
	}

	if (isGetLocationSuccess) {
		content = <Loader />;
	}

	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	console.log('forecastModal', isExpanded);

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
