import { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer } from '@react-google-maps/api';
import * as Styled from './Styles';
import { useGetPosition } from '../Forecasts/hooks/useGetPositionString';
import { ThreeDots } from 'react-loader-spinner';
import { usePreference } from '../../zustand/hooks/usePreference';

export interface MapProps {}
type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

const MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const Map: React.FC<MapProps> = Props => {
	const { isDarkMode } = usePreference();
	const mapRef = useRef<GoogleMap>();
	const { error, position } = useGetPosition();
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: MAP_KEY!,
	});
	const containerStyle = {
		width: '100%',
		height: '100vh',
	};
	const center = useMemo<LatLngLiteral>(
		() =>
			position
				? {
						lat: position?.latitude!,
						lng: position?.longitude!,
				  }
				: { lat: 31, lng: 34 },
		[position]
	);
	const options = useMemo<MapOptions>(
		() => ({
			disabledDefaultUI: true,
			clickableIcons: false,
			zoomControl: false,
			streetViewControl: false,
			mapTypeControl: false,
			fullscreenControl: false,
			mapId: isDarkMode ? 'ce5f41cd8a96446e' : '758c608fa6c8ae1',
		}),
		[isDarkMode]
	);

	const onLoad = useCallback((map: any) => (mapRef.current = map), []);

	if (!isLoaded) {
		return (
			<ThreeDots
				height='80'
				width='80'
				radius='9'
				color={'#0f0f0ef0'}
				ariaLabel='three-dots-loading'
				wrapperStyle={{
					position: 'fixed',
					zIndex: '9999',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
				visible={true}
			/>
		);
	}

	return (
		<Styled.MapWrapper>
			<GoogleMap
				zoom={10}
				center={center}
				options={options}
				mapContainerStyle={containerStyle}
				onLoad={onLoad}></GoogleMap>
		</Styled.MapWrapper>
	);
};

export default Map;
