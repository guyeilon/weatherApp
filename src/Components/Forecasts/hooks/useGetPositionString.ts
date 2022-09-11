import { useState, useEffect } from 'react';

const defaultSettings = {
	enableHighAccuracy: false,
	timeout: Infinity,
	maximumAge: 0,
};

type position =
	| {
			latitude: number;
			longitude: number;
	  }
	| {};
export const useGetPositionString = () => {
	const [position, setPosition] = useState<position>({});
	const [error, setError] = useState<string>();
	const [geoString, setGeoString] = useState<string>();

	const onSuccess = ({ coords }: GeolocationPosition) => {
		setPosition({
			latitude: coords.latitude,
			longitude: coords.longitude,
		});
		const string = `${coords.latitude},${coords.longitude}`;
		setGeoString(string);
	};
	const onError = (error: { message: string }) => {
		setError(error.message);
	};

	const settings = {
		...defaultSettings,
	};

	useEffect(() => {
		const geo = navigator.geolocation;

		if (!geo || !navigator) {
			setError('Geolocation is not supported');

			return;
		}
		geo.getCurrentPosition(onSuccess, onError, settings);

		// return () => geo.clearWatch(watcher);
	}, []);

	return { geoString, error };
};
