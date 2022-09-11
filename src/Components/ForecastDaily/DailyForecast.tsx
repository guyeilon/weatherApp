import React from 'react';
import { convertToC, getTime } from '../../utils';
import * as Styled from './styles';
import { DailyForecastProps } from './types';
import { getForecastIcon } from '../Forecasts/hooks/getForecastIcon';
import { usePreference } from '../../zustand/hooks/usePreference';
import { useFavorites } from '../Favorites/hooks/useFavorites';
import { useDailyForecast } from '../Forecasts/hooks/useDailyForecast';

const DailyForecast: React.FC<DailyForecastProps> = ({ cityData }) => {
	const key = cityData?.key;
	const cityName = cityData?.cityName;
	const { isFahrenheit } = usePreference();
	const { mutate: addToFav } = useFavorites();

	const { isSuccess, fiveDaysData, updatedAt } = useDailyForecast(key, cityName);

	const icon = fiveDaysData[0]?.icon;
	const dayTemp = fiveDaysData[0]?.dayTemp;
	const nightTemp = fiveDaysData[0]?.nightTemp;
	const dayPhrase = fiveDaysData[0]?.dayPhrase;
	const timestamp = updatedAt;

	const toggleTemperature = (temp: number) => {
		return isFahrenheit ? temp : convertToC(temp);
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
