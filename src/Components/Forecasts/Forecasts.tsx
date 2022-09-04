import React, { useEffect, useState } from 'react';

import { useGetPositionString } from './hooks/useGetPositionString';
import NoLocation from '../NoLocation';
import * as Styled from './styles';

import DailyForecast from './DailyForecast/DailyForecast';

import WeeklyForecast from './WeeklyForecast';

import HourlyForecast from './HourlyForecast';
import FiveDaysForecast from './FiveDaysForecast';

import Modal from '../../Common/Modal';

import { useGetLocation } from './hooks/useGetLocation';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useDailyForecast } from './hooks/useDailyForecast';
import { useGetHourlyForecast } from './hooks/useHourlyForecast';
import { MOBILE_WIDTH } from '../../constants/screensWidth';

export interface ForecastProps {}

const Forecast: React.FC<ForecastProps> = Props => {
	const { error, geoString } = useGetPositionString();
	const { localCityName, localCityKey } = useGetLocation(geoString);
	const { width: screenWidth } = useWindowSize();

	const { isSuccess: isDailySuccess, fiveDaysData, updatedAt } = useDailyForecast(localCityKey, localCityName);
	const { isSuccess: isHourlySuccess, hourlyData } = useGetHourlyForecast(localCityKey, localCityName);

	let content;
	// should get props with city key and name if not show local forecast

	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	if (error) {
		content = <NoLocation />;
	}
	if (isDailySuccess && isHourlySuccess) {
		content = (
			<div>
				<DailyForecast data={fiveDaysData} cityName={localCityName} updatedAt={updatedAt} />
				<WeeklyForecast data={fiveDaysData} />
				{screenWidth <= MOBILE_WIDTH && (
					<Styled.btnWrapper>
						<Styled.forecastBtn
							ghost
							onClick={() => {
								setIsExpanded(true);
							}}>
							5 Days Forecast
						</Styled.forecastBtn>
					</Styled.btnWrapper>
				)}
				<HourlyForecast data={hourlyData} />

				{screenWidth > MOBILE_WIDTH ? (
					<FiveDaysForecast data={fiveDaysData} />
				) : (
					<>
						{isExpanded && (
							<Modal
								padding='40px 30px'
								width='100%'
								height='511px'
								position='bottom'
								isModalOpen={isExpanded}
								closeModal={() => setIsExpanded(false)}>
								<FiveDaysForecast data={fiveDaysData} isExpanded={isExpanded} />
							</Modal>
						)}
					</>
				)}
			</div>
		);
	}

	return <Styled.ContentWrapper>{content}</Styled.ContentWrapper>;
};

export default Forecast;
