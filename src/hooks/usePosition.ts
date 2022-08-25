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
export const usePosition = () => {
	const [position, setPosition] = useState<position>({});
	const [error, setError] = useState<string | null>(null);

	const onChange = ({ coords }: GeolocationPosition) => {
		setPosition({
			latitude: coords.latitude,
			longitude: coords.longitude,
		});
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
		const watcher = geo.getCurrentPosition(onChange, onError, settings);

		// return () => geo.clearWatch(watcher);
	}, []);
	return { ...position, error };
};
