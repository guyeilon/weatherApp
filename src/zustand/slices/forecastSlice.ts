import { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { CityData, DailyData, HourlyData } from '../../types/forecastType';

export type forecastSlice = {
	fiveDaysData: DailyData | undefined;
	hourlyData: HourlyData | undefined;
	cityData: CityData | undefined;
	updatedAt: number | undefined;
	isHydrated: boolean;
	setFiveDaysData: (data: DailyData | undefined) => void;
	setHourlyData: (data: HourlyData | undefined) => void;
	setCityData: (data: CityData | undefined) => void;
	setUpdatedAt: (data: number) => void;
	setIsHydrated: (data: boolean) => void;
	reset: () => void;
};

export const forecastSlice: StateCreator<
	forecastSlice,
	[],
	[['zustand/persist', forecastSlice], ['zustand/immer', never]],
	forecastSlice
> = persist(
	immer(
		(set): forecastSlice => ({
			updatedAt: undefined,
			cityData: undefined,
			fiveDaysData: undefined,
			hourlyData: undefined,
			isHydrated: false,
			setFiveDaysData: (fiveDaysData: DailyData | undefined) =>
				set(state => {
					state.fiveDaysData = fiveDaysData;
				}),
			setHourlyData: (hourlyData: HourlyData | undefined) =>
				set(state => {
					state.hourlyData = hourlyData;
				}),
			setUpdatedAt: (updatedAt: number) =>
				set(state => {
					state.updatedAt = updatedAt;
				}),
			setCityData: (cityData: CityData | undefined) =>
				set(state => {
					state.cityData = cityData;
				}),
			setIsHydrated: (isHydrated: boolean) =>
				set(state => {
					state.isHydrated = isHydrated;
				}),
			reset: () => {
				set(state => {
					state.updatedAt = undefined;
					state.fiveDaysData = undefined;
					state.hourlyData = undefined;
					state.isHydrated = false;
				});
			},
		})
	),

	{
		name: 'weatherApp_Forecast',
		getStorage: () => localStorage,
		onRehydrateStorage: state => {
			console.log('hydration starts');
		},
	}
);
