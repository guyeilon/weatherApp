import React, { useEffect } from 'react';
import * as Styled from './styles';
import { useGetPosition } from './hooks/useGetPosition';
import NoLocation from '../NoLocation';
import DailyForecast from '../ForecastDaily/DailyForecast';
import WeeklyForecast from '../ForecastWeekly';
import HourlyForecast from '../ForecastHourly';
import FiveDaysForecast from '../FiveDaysForecast';
import { useGetLocation } from './hooks/useGetLocation';
import { useForecast } from '../../zustand/hooks/useForecast';
import { usePreference } from '../../zustand/hooks/usePreference';
import Map from '../Map';
import { useWindowSize } from '../../hooks/useWindowSize';

export interface ForecastProps {}

const Forecast: React.FC<ForecastProps> = Props => {
	const { error: geoPositionError, geoString } = useGetPosition();
	const { cityData } = useGetLocation(geoString);
	console.log(cityData);
	const { cityData: cityDataFromStore } = useForecast();
	const { isMapOpen, toggleMap } = usePreference();
	const { isMobile } = useWindowSize();

	let content;

	if (geoPositionError) {
		content = <NoLocation />;
	}

	const cityToShow = cityDataFromStore ? cityDataFromStore : cityData;

	const cityDataForMap = [cityToShow];

	content = (
		<div>
			<DailyForecast cityData={cityToShow} />
			<WeeklyForecast cityData={cityToShow} />
			<HourlyForecast cityData={cityToShow} />
			<FiveDaysForecast cityData={cityToShow} />
			{isMobile && (
				<Styled.BtnWrapper>
					<Styled.LayoutBtn svg='mapDark' secondary onClick={() => toggleMap(isMapOpen)}>
						Map
					</Styled.LayoutBtn>
				</Styled.BtnWrapper>
			)}
		</div>
	);

	return isMapOpen ? <Map cityData={cityDataForMap} /> : <Styled.ContentWrapper>{content}</Styled.ContentWrapper>;
};

export default Forecast;
