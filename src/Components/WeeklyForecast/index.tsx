import React from 'react';
import { WeeklyForecastProps } from './types';
import * as Styled from './styles';
import { convertToC, getDay } from '../../utils';
import { getForecastIcon } from '../../constants';
import { Flex } from '../../design/helper.styles';
import useStore from '../../App/store';

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ getData }) => {
	const store = useStore(state => state);

	const toggleTemperature = (temp: number) => {
		return store.degree === 'fahrenheit' ? temp : convertToC(temp);
	};

	const days = ['day1', 'day2', 'day3', 'day4'];

	let content;

	content = days.map(day => {
		const dayIdx = days.indexOf(day);
		const { icon, dayTemp, nightTemp, date, dayPhrase } = getData(dayIdx);

		return (
			<Styled.DailyData area={day} key={day}>
				{date && dayPhrase && <Styled.DayAndPhrase>{getDay(date) + ' - ' + dayPhrase}</Styled.DayAndPhrase>}
				<Flex center>
					{icon && <Styled.Icon src={getForecastIcon(icon)} />}
					{dayTemp && nightTemp && (
						<Styled.Temp>
							{toggleTemperature(dayTemp)}
							&deg;<span> -{toggleTemperature(nightTemp)}&deg;</span>
						</Styled.Temp>
					)}
				</Flex>
			</Styled.DailyData>
		);
	});

	return <Styled.WeeklyForecastWrapper>{content}</Styled.WeeklyForecastWrapper>;
};

export default WeeklyForecast;
