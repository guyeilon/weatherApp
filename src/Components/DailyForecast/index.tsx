import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import useStore from '../../App/store';

import { getForecastIcon } from '../../constants';
import { Flex } from '../../design/styles';
import { fToCTemp } from '../../utils';
import * as Styled from './styles';
import { DailyForecastProps } from './types';

const DailyForecast: React.FC<DailyForecastProps> = ({ cityName, icon, dailyTemp }) => {
	const store = useStore(state => state);

	const toggleTemperature = (temp: number) => {
		return store.degree === 'fahrenheit' ? temp : fToCTemp(temp);
	};

	const maxTemp = dailyTemp?.Maximum?.Value;
	const minTemp = dailyTemp?.Minimum?.Value;
	return (
		<>
			<Styled.ContentWrapper>
				<Styled.CityName>{cityName}</Styled.CityName>
				<Flex center>
					<Styled.Icon src={getForecastIcon(icon)} />
					<Styled.AllDayTemp>
						{toggleTemperature(maxTemp)}&deg;<div> - {toggleTemperature(minTemp)}&deg;</div>
					</Styled.AllDayTemp>
					{/* <Styled.NightTemp> - {toggleTemperature(minTemp)}&deg;</Styled.NightTemp> */}
				</Flex>
			</Styled.ContentWrapper>
		</>
	);
};

export default DailyForecast;
