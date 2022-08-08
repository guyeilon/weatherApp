import React from 'react';
import * as Styled from './styles';

export interface DailyForecastProps {
	cityName: string;
}

const DailyForecast: React.FC<DailyForecastProps> = ({ cityName }) => {
	return (
		<>
			<Styled.ContentWrapper>
				<Styled.CityName>{cityName}</Styled.CityName>
			</Styled.ContentWrapper>
		</>
	);
};

export default DailyForecast;
