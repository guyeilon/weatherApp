import React, { useState } from 'react';
import * as Styled from './styles';
import { useGetPositionString } from './hooks/useGetPositionString';
import NoLocation from '../NoLocation';
import DailyForecast from '../ForecastDaily/DailyForecast';
import WeeklyForecast from '../ForecastWeekly';
import HourlyForecast from '../ForecastHourly';
import FiveDaysForecast from '../FiveDaysForecast';

import Modal from '../../Common/Modal';
import { useGetLocation } from './hooks/useGetLocation';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useForecast } from '../../zustand/hooks/useForecast';
import { MOBILE_WIDTH } from '../../constants';

export interface ForecastProps {}

const Forecast: React.FC<ForecastProps> = Props => {
	const { width: screenWidth } = useWindowSize();
	const { error: geoPositionError, geoString } = useGetPositionString();
	const cityData = useGetLocation(geoString);
	const { cityData: cityDataFromStore } = useForecast();

	const [isExpanded, setIsExpanded] = useState<boolean>(false);

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
