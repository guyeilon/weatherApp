import { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { DailyData, HourlyData } from '../../types/forecastType';

export type forecastSlice = {
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
			cityName: undefined,
			fiveDaysData: undefined,
			hourlyData: undefined,
			cityKey: undefined,
			isHydrated: false,
			setFiveDaysData: (fiveDaysData: DailyData) =>
				set(state => {
					state.fiveDaysData = fiveDaysData;
				}),
			setHourlyData: (hourlyData: HourlyData) =>
				set(state => {
					state.hourlyData = hourlyData;
				}),
			setUpdatedAt: (updatedAt: number) =>
				set(state => {
					state.updatedAt = updatedAt;
				}),
			setCityKey: (cityKey: number | undefined) =>
				set(state => {
					state.cityKey = cityKey;
				}),
			setCityName: (cityName: string | undefined) =>
				set(state => {
					state.cityName = cityName;
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
		name: 'weatherAppForecast',
		getStorage: () => localStorage,
		onRehydrateStorage: state => {
			console.log('hydration starts');
		},
	}
);
