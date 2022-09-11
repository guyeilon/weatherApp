import create from 'zustand';

import { userSlice } from './slices/userSlice';
import { preferenceSlice } from './slices/preferenceSlice';
import { forecastSlice } from './slices/forecastSlice';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { CityData, DailyData, HourlyData } from '../types/forecastType';

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
				fiveDaysData: undefined,
				hourlyData: undefined,
				cityData: undefined,
				isHydrated: false,
				setFiveDaysData: (data: DailyData | undefined) =>
					set(state => {
						state.fiveDaysData = data;
					}),
				setHourlyData: (data: HourlyData | undefined) =>
					set(state => {
						state.hourlyData = data;
					}),
				setUpdatedAt: (data: number) =>
					set(state => {
						state.updatedAt = data;
					}),
				setCityData: (data: CityData | undefined) =>
					set(state => {
						state.cityData = data;
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
			// onRehydrateStorage: state => {
			// 	console.log('hydration starts');
			// },
		}
	)
);
