import React from 'react';
import { WeeklyForecastProps } from './types';
import * as Styled from './styles';
import { convertToC, getDay } from '../../utils';
import { Flex } from '../../design/helper.styles';
import { getForecastIcon } from '../Forecasts/hooks/getForecastIcon';
import { usePreference } from '../../zustand/hooks/usePreference';
import { useDailyForecast } from '../Forecasts/hooks/useDailyForecast';

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ cityData }) => {
	const key = cityData?.key;
	const cityName = cityData?.cityName;

	const { fiveDaysData, isSuccess } = useDailyForecast(key, cityName);
	const { isFahrenheit } = usePreference();

	const toggleTemperature = (temp: number) => {
		return isFahrenheit ? temp : convertToC(temp);
	};

	let content;

	content = fiveDaysData.map((day, idx) => {
		if (idx == 4) return;
		const icon = day.icon;
		const dayTemp = day.dayTemp;
		const nightTemp = day.nightTemp;
		const dayPhrase = day.dayPhrase;
		const date = day.date;

		return (
			<Styled.DailyData key={idx}>
				<Flex>
					{icon && <Styled.IconInMobile src={getForecastIcon(icon)} />}
					{date && dayPhrase && <Styled.DayAndPhrase>{getDay(date) + ' - ' + dayPhrase}</Styled.DayAndPhrase>}
				</Flex>
				<Flex center>
					{icon && <Styled.IconInDesktop src={getForecastIcon(icon)} />}
					{dayTemp && nightTemp && (
						<Styled.Temp>
							{toggleTemperature(dayTemp)}
							&deg;<span> - {toggleTemperature(nightTemp)}&deg;</span>
						</Styled.Temp>
					)}
				</Flex>
			</Styled.DailyData>
		);
	});

	return <>{isSuccess && <Styled.WeeklyForecastWrapper>{content}</Styled.WeeklyForecastWrapper>}</>;
};

export default WeeklyForecast;
