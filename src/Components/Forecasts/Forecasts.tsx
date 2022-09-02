import React, { useEffect, useState } from 'react';

import { useGetPositionString } from './hooks/useGetPositionString';
import NoLocation from '../NoLocation';
import * as Styled from './styles';

import DailyForecast from './DailyForecast/DailyForecast';

import WeeklyForecast from '../WeeklyForecast';

import HourlyForecast from '../HourlyForecast';
import FiveDaysForecast from '../FiveDaysForecast';

import Modal from '../../Common/Modal';
import { useGetDailyQuery, useGetHourlyQuery, useGetLocationQuery } from '../../services/react-query/useForecastQuery';

import { useCustomToast } from '../App/hooks/useCustomToast';

export interface ForecastProps {}

const Forecast: React.FC<ForecastProps> = Props => {
	const { error, geoString } = useGetPositionString();

	let content;

	const { isGetLocationSuccess, cityName, cityKey } = useGetLocationQuery(geoString);
	const { isDailySuccess, fiveDaysData, updatedAt } = useGetDailyQuery(cityKey);
	const { isHourlySuccess, hourlyData } = useGetHourlyQuery(cityKey);

	if (error) {
		content = <NoLocation />;
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
