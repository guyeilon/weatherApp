import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import useStore from '../../App/store';

import { getForecastIcon } from '../../constants';
import { Flex } from '../../design/helper.styles';

import { fToCTemp, getTime } from '../../utils';
import * as Styled from './styles';
import { DailyForecastProps } from './types';

const DailyForecast: React.FC<DailyForecastProps> = ({
	cityName,
	icon,
	dailyTemp,
	dayPhrase,
	nightPhrase,
	timestamp,
}) => {
	const store = useStore(state => state);

	const toggleTemperature = (temp: number) => {
		return store.degree === 'fahrenheit' ? temp : fToCTemp(temp);
	};

	const maxTemp = dailyTemp?.Maximum?.Value;
	const minTemp = dailyTemp?.Minimum?.Value;
	return (
		<>
			<Styled.DailyForecastContainer>
				<Styled.CityName>{cityName}</Styled.CityName>
				<Styled.DailyTempIconWrapper>
					{icon && <Styled.Icon src={getForecastIcon(icon)} />}
					<Styled.DailyTempWrapper>
						{maxTemp && (
							<Styled.DayTemp>
								{toggleTemperature(maxTemp)}
								<span>&deg;</span>
							</Styled.DayTemp>
						)}
						{minTemp && (
							<Styled.NightTemp>
								- {toggleTemperature(minTemp)}
								<span>&deg;</span>
							</Styled.NightTemp>
						)}
					</Styled.DailyTempWrapper>
				</Styled.DailyTempIconWrapper>
				<Styled.Phrase>{dayPhrase}</Styled.Phrase>
				<Styled.Date>{getTime(timestamp)}</Styled.Date>
			</Styled.DailyForecastContainer>
		</>
	);
};

export default DailyForecast;
