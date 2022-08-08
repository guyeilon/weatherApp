import { useState, useEffect } from 'react';
export const usePosition = () => {
	type position =
		| {
				latitude: number;
				longitude: number;
		  }
		| {};

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
	useEffect(() => {
		const geo = navigator.geolocation;
		if (!geo) {
			setError('Geolocation is not supported');

			return;
		}
		const watcher = geo.watchPosition(onChange, onError);
		return () => geo.clearWatch(watcher);
	}, []);
	return { ...position, error };
};
