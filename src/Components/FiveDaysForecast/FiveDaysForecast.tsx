import React, { useState } from 'react';
import { FiveDaysForecastProps } from './types';
import * as Styled from './styles';
import { getDay, getDayAndMonth } from '../../utils';
import Chart from 'react-apexcharts';

import { useDailyForecast } from '../Forecasts/hooks/useDailyForecast';
import { useChartData } from './hooks/useChartData';
import HoverGrid from './HoverGrid';
import { useWindowSize } from '../../hooks/useWindowSize';
import { MOBILE_WIDTH } from '../../constants';
import Modal from '../../Common/Modal';

const FiveDaysForecast: React.FC<FiveDaysForecastProps> = ({ cityData }) => {
	const key = cityData?.key;
	const cityName = cityData?.cityName;

	const { width: screenWidth } = useWindowSize();

	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const { fiveDaysData, isSuccess } = useDailyForecast(key, cityName);

	const { options, seriesDay, seriesNight } = useChartData(fiveDaysData, isExpanded, isSuccess);

	let chartContent;

	if (isSuccess) {
		chartContent = (
			<>
				{fiveDaysData.map((day, idx) => {
					const date = day.date;
					return (
						<Styled.DailyData key={idx}>
							<Styled.Day>{getDay(date)}</Styled.Day>
							<Styled.Date>{getDayAndMonth(date)}</Styled.Date>
							<Styled.SunIcon />
						</Styled.DailyData>
					);
				})}
				<Styled.DayChart>
					<Chart options={options} series={seriesDay} />
				</Styled.DayChart>
				<Styled.NightChart>
					<Chart options={options} series={seriesNight} />
				</Styled.NightChart>

				{fiveDaysData.map((day, idx) => {
					return (
						<Styled.MoonWrapper key={idx}>
							<Styled.MoonIcon />
						</Styled.MoonWrapper>
					);
				})}
				<HoverGrid />
			</>
		);
	}

	return (
		<>
			{isSuccess && screenWidth <= MOBILE_WIDTH ? (
				<Styled.btnWrapper>
					<Styled.forecastBtn
						ghost
						onClick={() => {
							setIsExpanded(current => !current);
						}}>
						5 Days Forecast
					</Styled.forecastBtn>
				</Styled.btnWrapper>
			) : (
				<>
					{isSuccess && (
						<Styled.FiveDaysForecastWrapper>
							<Styled.Header>5-days forecast</Styled.Header>
							<Styled.ChartWrapper>{chartContent} </Styled.ChartWrapper>
						</Styled.FiveDaysForecastWrapper>
					)}
				</>
			)}
			{isExpanded && (
				<Modal
					padding='40px 30px'
					width='100%'
					height='511px'
					position='bottom'
					isModalOpen={isExpanded}
					closeModal={() => setIsExpanded(false)}>
					<Styled.ChartWrapper>{chartContent} </Styled.ChartWrapper>
				</Modal>
			)}
		</>
	);
};

export default FiveDaysForecast;
