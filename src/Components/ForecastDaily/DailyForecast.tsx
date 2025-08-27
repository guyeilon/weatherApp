import React from 'react';
import { convertToC, getTime } from '../../utils';
import * as Styled from './styles';
import { DailyForecastProps } from './types';
import { getForecastIcon } from '../Forecasts/hooks/getForecastIcon';
import { usePreference } from '../../zustand/hooks/usePreference';
import { useAddRemoveFavorites } from '../Favorites/hooks/useAddRemoveFavorites';
import { useDailyForecast } from '../Forecasts/hooks/useDailyForecast';
import { useIsAddedToFav } from '../Favorites/hooks/useIsAddedToFav';

const DailyForecast: React.FC<DailyForecastProps> = ({ cityData }) => {
	const { isFahrenheit } = usePreference();

	const { key, cityName } = cityData;

	const { addRemoveFavorites } = useAddRemoveFavorites();
	const isAddedToFav = useIsAddedToFav(cityData);

	const { isSuccess, fiveDaysData, updatedAt } = useDailyForecast(key, cityName);

	if (!cityData) return null;

	const firstDay = fiveDaysData[0];
	const icon = firstDay?.icon;
	const dayTemp = firstDay?.dayTemp;
	const nightTemp = firstDay?.nightTemp;
	const dayPhrase = firstDay?.dayPhrase;
	const timestamp = updatedAt;

	const toggleTemperature = (temp: number) => {
		return isFahrenheit ? temp : convertToC(temp);
	};

	return (
		<>
			{isSuccess && (
				<Styled.DailyForecastContainer>
					<div>
						<Styled.CityName>{cityName}</Styled.CityName>

						<Styled.DailyTempIconWrapper>
							{icon && <Styled.Icon src={getForecastIcon(icon)} />}
							<Styled.DailyTempWrapper>
								{dayTemp !== undefined && (
									<Styled.DayTemp>
										{toggleTemperature(dayTemp)}
										<span>&deg;</span>
									</Styled.DayTemp>
								)}
								{nightTemp !== undefined && (
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

					<Styled.FavBtn
						svg={isAddedToFav ? 'favFull' : 'fav'}
						secondary
						onClick={() => addRemoveFavorites(cityData)}>
						{isAddedToFav ? 'Added to favorites' : 'Add to favorites'}
					</Styled.FavBtn>
				</Styled.DailyForecastContainer>
			)}
		</>
	);
};

export default DailyForecast;
