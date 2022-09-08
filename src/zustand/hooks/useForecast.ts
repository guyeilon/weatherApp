import { DailyData, HourlyData } from '../../types/forecastType';

import { useForecastStore } from '../store';

interface UseForecast {
	fiveDaysData: DailyData | undefined;
	hourlyData: HourlyData | undefined;
	updatedAt: number | undefined;
	cityName: string | undefined;
	cityKey: number | undefined;
	isHydrated: boolean;
	setFiveDaysData: (fiveDaysData: DailyData) => void;
	setHourlyData: (hourlyData: HourlyData) => void;
	setUpdatedAt: (updatedAt: number) => void;
	setCityKey: (cityKey: number | undefined) => void;
	setCityName: (cityName: string | undefined) => void;
	setIsHydrated: (isHydrated: boolean) => void;
	reset: () => void;
}

export const useForecast = (): UseForecast => {
	const setFiveDaysData = useForecastStore(state => state.setFiveDaysData);
	const setHourlyData = useForecastStore(state => state.setHourlyData);
	const setUpdatedAt = useForecastStore(state => state.setUpdatedAt);
	const setCityKey = useForecastStore(state => state.setCityKey);
	const setCityName = useForecastStore(state => state.setCityName);
	const setIsHydrated = useForecastStore(state => state.setIsHydrated);
	const fiveDaysData = useForecastStore(state => state.fiveDaysData);
	const hourlyData = useForecastStore(state => state.hourlyData);
	const updatedAt = useForecastStore(state => state.updatedAt);
	const cityName = useForecastStore(state => state.cityName);
	const cityKey = useForecastStore(state => state.cityKey);
	const isHydrated = useForecastStore(state => state.isHydrated);
	const reset = useForecastStore(state => state.reset);

	return {
		isHydrated,
		cityKey,
		cityName,
		updatedAt,
		hourlyData,
		fiveDaysData,
		setFiveDaysData,
		setHourlyData,
		setUpdatedAt,
		setCityKey,
		setCityName,
		setIsHydrated,
		reset,
	};
};
