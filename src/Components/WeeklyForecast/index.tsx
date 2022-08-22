import React from 'react';
import { WeeklyForecastProps } from './types';
import * as Styled from './styles';
import { convertToC, getDay } from '../../utils';
import { getForecastIcon } from '../../constants';
import { Flex } from '../../design/helper.styles';
import useStore from '../../App/store';

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ fiveDaysData }) => {
	const store = useStore(state => state);

	const toggleTemperature = (temp: number) => {
		return store.degree === 'fahrenheit' ? temp : convertToC(temp);
	};

	let content;

	content = fiveDaysData.map((day, idx) => {
		const icon = day.icon;
		const dayTemp = day.dayTemp;
		const nightTemp = day.nightTemp;
		const dayPhrase = day.dayPhrase;
		const date = day.date;

		return (
			<Styled.DailyData key={idx}>
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
