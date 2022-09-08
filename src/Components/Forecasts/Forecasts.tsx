import React, { useState, useEffect } from 'react';

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
import { FRESH_TIME, MOBILE_WIDTH } from '../../constants';
import { useForecast } from '../../zustand/hooks/useForecast';
import { useDataFromStore } from './hooks/useFreshLocalStorageData';

export interface ForecastProps {}

const Forecast: React.FC<ForecastProps> = Props => {
	const { error, geoString } = useGetPositionString();
	const { cityKey, cityName } = useForecast();

	const isNeedToFetch = useDataFromStore(FRESH_TIME);

	const { localCityName, localCityKey } = useGetLocation(geoString);
	const { width: screenWidth } = useWindowSize();

	const {
		isSuccess: isDailySuccess,
		fiveDaysData,
		updatedAt,
	} = useDailyForecast(cityKey ? cityKey : localCityKey, cityName ? cityName : localCityName);
	const { isSuccess: isHourlySuccess, hourlyData } = useGetHourlyForecast(
		cityKey ? cityKey : localCityKey,
		cityName ? cityName : localCityName
	);

	let content;

	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	if (error) {
		content = <NoLocation />;
	}
	if (isDailySuccess && isHourlySuccess) {
		content = (
			<div>
				<DailyForecast
					data={fiveDaysData}
					cityName={cityName ? cityName : localCityName}
					updatedAt={updatedAt}
				/>
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
