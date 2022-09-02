import React, { useEffect, useState } from 'react';

import { useGetPositionString } from './hooks/useGetPositionString';
import NoLocation from '../NoLocation';
import * as Styled from './styles';

import DailyForecast from './DailyForecast/DailyForecast';

import WeeklyForecast from '../WeeklyForecast';

import HourlyForecast from '../HourlyForecast';
import FiveDaysForecast from '../FiveDaysForecast';

import Modal from '../../Common/Modal';
import { useGetDailyQuery, useGetHourlyQuery } from '../../react-query/useForecastQuery';

import { useGetLocation } from './hooks/useGetLocation';

export interface ForecastProps {}

const Forecast: React.FC<ForecastProps> = Props => {
	const { error, geoString } = useGetPositionString();

	let content;
	// should get props with city key and name if not show local forecast

	const { localCityName, localCityKey } = useGetLocation(geoString);
	const { isDailySuccess, fiveDaysData, updatedAt } = useGetDailyQuery(localCityKey);
	const { isHourlySuccess, hourlyData } = useGetHourlyQuery(localCityKey);

	if (error) {
		content = <NoLocation />;
	}

	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	console.log('forecastModal', isExpanded);

	if (isDailySuccess && isHourlySuccess) {
		content = (
			<div>
				<DailyForecast cityKey={localCityKey} cityName={localCityName} />
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
