import { CityData, DailyData, HourlyData } from '../../types/forecastType';

import { useForecastStore } from '../store';

interface UseForecast {
	fiveDaysData: DailyData | undefined;
	hourlyData: HourlyData | undefined;
	updatedAt: number | undefined;
	cityData: CityData | undefined;
	isHydrated: boolean;
	setFiveDaysData: (fiveDaysData: DailyData | undefined) => void;
	setHourlyData: (hourlyData: HourlyData | undefined) => void;
	setCityData: (cityData: CityData | undefined) => void;
	setUpdatedAt: (updatedAt: number) => void;
	setIsHydrated: (isHydrated: boolean) => void;
	reset: () => void;
}

export const useForecast = (): UseForecast => {
	const setFiveDaysData = useForecastStore(state => state.setFiveDaysData);
	const setHourlyData = useForecastStore(state => state.setHourlyData);
	const setUpdatedAt = useForecastStore(state => state.setUpdatedAt);
	const setCityData = useForecastStore(state => state.setCityData);
	const setIsHydrated = useForecastStore(state => state.setIsHydrated);
	const fiveDaysData = useForecastStore(state => state.fiveDaysData);
	const hourlyData = useForecastStore(state => state.hourlyData);
	const updatedAt = useForecastStore(state => state.updatedAt);
	const cityData = useForecastStore(state => state.cityData);
	const isHydrated = useForecastStore(state => state.isHydrated);
	const reset = useForecastStore(state => state.reset);

	return {
		isHydrated,
		cityData,
		updatedAt,
		hourlyData,
		fiveDaysData,
		setFiveDaysData,
		setHourlyData,
		setUpdatedAt,
		setCityData,
		setIsHydrated,
		reset,
	};
};
