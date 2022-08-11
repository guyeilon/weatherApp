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
	// const [permission, setPermission] = useState<boolean>(false);

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

	let result;

	// const handlePermission = async () => {
	// 	const permissions = await navigator.permissions.query({ name: 'geolocation' });
	// 	result = permissions.state;
	// 	console.log(permission);
	// 	console.log(result);

	// 	if (result === 'granted') {
	// 		setPermission(true);
	// 	}

	// 	console.log(permission);
	// 	return result;
	// };

	useEffect(() => {
		// handlePermission();
		const geo = navigator.geolocation;

		if (!geo || !navigator) {
			setError('Geolocation is not supported');

			return;
		}
		const watcher = geo.watchPosition(onChange, onError, settings);

		return () => geo.clearWatch(watcher);
	}, []);
	return { ...position, error };
};
