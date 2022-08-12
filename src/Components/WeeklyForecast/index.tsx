import React from 'react';
import { WeeklyForecastProps } from './types';
import * as Styled from './styles';

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ getForecastDailyDataByDayIdx }) => {
	const days = ['day1', 'day2', 'day3', 'day4'];

	let content;

	content = days.map(day => {
		const dayIdx = days.indexOf(day);
		const [icon, dayTemp, nightTemp, timestamp] = getForecastDailyDataByDayIdx(dayIdx);
		return <Styled.DayAndPhrase></Styled.DayAndPhrase>;
	});

	return (
		<Styled.WeeklyForecastWrapper>
			<Styled.DailyData>{content}</Styled.DailyData>
		</Styled.WeeklyForecastWrapper>
	);
};

export default WeeklyForecast;
