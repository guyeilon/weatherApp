import React, { useEffect } from 'react';
import * as Styled from './styles';
import { useGetPosition } from './hooks/useGetPositionString';
import NoLocation from '../NoLocation';
import DailyForecast from '../ForecastDaily/DailyForecast';
import WeeklyForecast from '../ForecastWeekly';
import HourlyForecast from '../ForecastHourly';
import FiveDaysForecast from '../FiveDaysForecast';
import { useGetLocation } from './hooks/useGetLocation';
import { useForecast } from '../../zustand/hooks/useForecast';

export interface ForecastProps {}

const Forecast: React.FC<ForecastProps> = Props => {
	const { error: geoPositionError, geoString } = useGetPosition();
	const cityData = useGetLocation(geoString);
	const { cityData: cityDataFromStore } = useForecast();

	let content;

	if (geoPositionError) {
		content = <NoLocation />;
	}

	const cityToShow = cityDataFromStore ? cityDataFromStore : cityData;

	content = (
		<Styled.ComponentsOrder>
			<DailyForecast cityData={cityToShow} />
			<WeeklyForecast cityData={cityToShow} />
			<HourlyForecast cityData={cityToShow} />
			<FiveDaysForecast cityData={cityToShow} />
		</Styled.ComponentsOrder>
	);

	return <Styled.ContentWrapper>{content}</Styled.ContentWrapper>;
};

export default Forecast;
