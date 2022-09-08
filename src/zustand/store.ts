import create from 'zustand';

import { userSlice } from './slices/userSlice';
import { preferenceSlice } from './slices/preferenceSlice';
import { forecastSlice } from './slices/forecastSlice';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { DailyData, HourlyData } from '../types/forecastType';

export const usePreferenceStore = create<preferenceSlice>()((...args) => ({
	...preferenceSlice(...args),
}));
export const useUserStore = create<userSlice>()((...args) => ({
	...userSlice(...args),
}));
// export const useForecastStore = create<forecastSlice>()((...args) => ({
// 	...forecastSlice(...args),
// }));

export const useForecastStore = create<forecastSlice>()(
	persist(
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
			// onRehydrateStorage: state => {
			// 	console.log('hydration starts');
			// },
		}
	)
);
