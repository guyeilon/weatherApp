import { useEffect, useRef } from 'react';

import { useForecast } from '../../../zustand/hooks/useForecast';
import { useForecastStore } from '../../../zustand/store';

export const useDataFromStore = (refreshTime: number) => {
	const { reset, isHydrated, updatedAt } = useForecast();
	const isNeedToFetch = !isHydrated;
	const hasHydrated = useForecastStore.persist.hasHydrated();

	useEffect(() => {
		const intervalId = setInterval(() => {
			const current = new Date().getTime();
			const lastUpdate = updatedAt ? updatedAt : current;
			const isInvalid = current - lastUpdate > 1000 * 60 * refreshTime;

			if (isInvalid) {
				reset();
				console.log('delete data....');
			}
		}, 1000 * 60);
		return () => {
			clearInterval(intervalId);
		};
	}, [hasHydrated]);

	return isNeedToFetch;
};
