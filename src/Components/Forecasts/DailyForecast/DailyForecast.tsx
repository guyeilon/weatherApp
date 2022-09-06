import React from 'react';
import { convertToC, getTime } from '../../../utils';
import * as Styled from './styles';
import { DailyForecastProps } from './types';
import { getForecastIcon } from '../hooks/getForecastIcon';
import { usePreference } from '../../../hooks/usePreference';

const DailyForecast: React.FC<DailyForecastProps> = ({ data, updatedAt, cityName }) => {
	const { preference } = usePreference();

	const icon = data[0]?.icon;
	const dayTemp = data[0]?.dayTemp;
	const nightTemp = data[0]?.nightTemp;
	const dayPhrase = data[0]?.dayPhrase;
	const timestamp = updatedAt;

	const toggleTemperature = (temp: number) => {
		return preference.degree === 'fahrenheit' ? temp : convertToC(temp);
	};

	return (
		<>
			<Styled.DailyForecastContainer>
				<div>
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
				</div>
				<Styled.FavBtn svg='fav' secondary>
					Add to favorites
				</Styled.FavBtn>
			</Styled.DailyForecastContainer>
		</>
	);
};

export default DailyForecast;
