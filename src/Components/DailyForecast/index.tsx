import React from 'react';
import useStore from '../../App/store';
import { getForecastIcon } from '../../constants';
import { convertToC, getTime } from '../../utils';
import * as Styled from './styles';
import { DailyForecastProps } from './types';

const DailyForecast: React.FC<DailyForecastProps> = ({ cityName, getData }) => {
	const store = useStore(state => state);

	const { icon, dayTemp, nightTemp, dayPhrase, nightPhrase, timestamp } = getData(0);

	const toggleTemperature = (temp: number) => {
		return store.degree === 'fahrenheit' ? temp : convertToC(temp);
	};

	return (
		<>
			<Styled.DailyForecastContainer>
				<Styled.CityName>{cityName}</Styled.CityName>
				<Styled.DailyTempIconWrapper>
					{icon && <Styled.Icon src={getForecastIcon(icon)} />}
					<Styled.DailyTempWrapper>
						{dayTemp && (
							<Styled.DayTemp>
								{toggleTemperature(dayTemp)}
								<span>&deg;</span>
							</Styled.DayTemp>
						)}
						{nightTemp && (
							<Styled.NightTemp>
								- {toggleTemperature(nightTemp)}
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
