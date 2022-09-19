import GoogleMapReact from 'google-map-react';
import * as Styled from './Styles';
import { usePreference } from '../../zustand/hooks/usePreference';
import { useGetMapData } from './hooks/useGetMapData';
import { Temperature } from '../../types/mapTypes';
import { usePreferenceStore } from '../../zustand/store';
import { averageGeolocation, convertToC } from '../../utils';
import { getForecastIcon } from '../Forecasts/hooks/getForecastIcon';
import { CityData } from '../../types/forecastType';
import { MAP_KEY } from '../../api/constants';

import googleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';

import { useGetPosition } from '../Forecasts/hooks/useGetPosition';
import { useWindowSize } from '../../hooks/useWindowSize';

import { useForecast } from '../../zustand/hooks/useForecast';
import { useGetLocation } from '../Forecasts/hooks/useGetLocation';
import { useGetKeyFromMap } from './hooks/useGetKeyFromMap';

export interface MapProps {
	cityData: CityData[];
}

const Map: React.FC<MapProps> = ({ cityData }) => {
	const { isDarkMode, isMapOpen, toggleMap } = usePreference();
	const { isMobile } = useWindowSize();

	const containerStyle = {
		width: '100%',
		height: isMobile ? '100vh' : 'calc(100vh - 90px)',
	};

	const options = {
		disabledDefaultUI: true,
		clickableIcons: false,
		zoomControl: false,
		streetViewControl: false,
		mapTypeControl: false,
		fullscreenControl: false,
		mapId: isDarkMode ? 'ce5f41cd8a96446e' : '758c608fa6c8ae1',
	};

	const placesData = useGetMapData(cityData);
	const { position } = useGetPosition();
	const currentPosition = { lat: position?.latitude!, lng: position?.longitude! };

	const coords = placesData
		? placesData.length === 1
			? placesData[0].data?.location!
			: placesData.length === 0
			? currentPosition
			: averageGeolocation(placesData)
		: currentPosition;

	const { setCityData } = useForecast();
	const getKey = useGetKeyFromMap();

	const handleMapClick = (e: any) => {
		const geoString = `${e.lat},${e.lng}`;
		const res = getKey(geoString);
		console.log(res);
	};

	const handleLayoutClick = (e: GoogleMapReact) => {
		toggleMap(isMapOpen);
	};

	return (
		<Styled.MapWrapper>
			<div style={containerStyle}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: MAP_KEY! }}
					defaultCenter={{ lat: position?.latitude!, lng: position?.longitude! }}
					center={coords}
					options={options}
					defaultZoom={placesData.length === 1 ? 11 : 3}
					// onChange={e => console.log(e)}
					onClick={e => handleMapClick(e)}
					onChildClick={e => console.log(e)}
					yesIWantToUseGoogleMapApiInternals>
					{placesData &&
						placesData.length > 0 &&
						placesData.map((placeData, idx) => {
							if (placeData.isSuccess) {
								if (placeData.data?.location === undefined) return;
								return (
									<PlaceCard
										key={idx}
										lng={placeData?.data?.location.lng}
										lat={placeData?.data?.location.lat}
										temperature={placeData?.data.temperature}
									/>
								);
							}
						})}
				</GoogleMapReact>
			</div>
			{isMobile && (
				<Styled.BtnWrapper>
					<Styled.LayoutBtn svg='layout' secondary onClick={(e: googleMapReact) => handleLayoutClick(e)}>
						Layout
					</Styled.LayoutBtn>
				</Styled.BtnWrapper>
			)}
		</Styled.MapWrapper>
	);
};

export default Map;

const PlaceCard: React.FC<{ temperature: Temperature | undefined; lng: number; lat: number }> = ({ temperature }) => {
	const { isFahrenheit } = usePreferenceStore();

	const toggleTemperature = (temp: number) => {
		return isFahrenheit ? temp : convertToC(temp);
	};

	const dayTemp = temperature?.day!;
	const nightTemp = temperature?.night!;
	const icon = temperature?.icon!;

	return (
		<Styled.CardWrapper>
			<Styled.IconWrapper>
				<Styled.Icon src={getForecastIcon(icon)} />
			</Styled.IconWrapper>
			<Styled.TempWrapper>
				{toggleTemperature(dayTemp)}&deg; - {toggleTemperature(nightTemp)}&deg;
			</Styled.TempWrapper>
		</Styled.CardWrapper>
	);
};
