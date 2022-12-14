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
import { usePrefetchFavorites } from '../Favorites/hooks/usePrefetchFavorites';

export interface ForecastProps {}

const Forecast: React.FC<ForecastProps> = Props => {
	const { error: geoPositionError, geoString } = useGetPosition();
	const { cityData } = useGetLocation(geoString);

	const { cityData: cityDataFromStore, setCityData } = useForecast();

	const { isMapOpen, toggleMap } = usePreference();
	const { isMobile } = useWindowSize();

	let content;

	if (geoPositionError) {
		content = <NoLocation />;
	}

	const cityToShow = cityDataFromStore ? cityDataFromStore : cityData;
	const cityDataForMap = [cityToShow];

	usePrefetchFavorites();

	content = (
		<Styled.OrderLayout>
			<DailyForecast cityData={cityToShow} />
			<WeeklyForecast cityData={cityToShow} />
			<HourlyForecast cityData={cityToShow} />
			<FiveDaysForecast cityData={cityToShow} />
			{isMobile && cityToShow && (
				<Styled.BtnWrapper>
					<Styled.LayoutBtn svg='mapDark' secondary onClick={() => toggleMap(isMapOpen)}>
						Map
					</Styled.LayoutBtn>
				</Styled.BtnWrapper>
			)}
		</Styled.OrderLayout>
	);

	return isMapOpen ? <Map citiesData={cityDataForMap} /> : <Styled.ContentWrapper>{content}</Styled.ContentWrapper>;
};

export default Forecast;
