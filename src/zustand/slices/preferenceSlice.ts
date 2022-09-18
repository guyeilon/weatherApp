import { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type preferenceSlice = {
	theme: string;
	degree: string;
	isDarkMode: boolean;
	isFahrenheit: boolean;
	isMapOpen: boolean;
	toggleTheme: (theme: string) => void;
	toggleDegree: (degree: string) => void;
	toggleMap: (isMapOpen: boolean) => void;
};

const toggleTheme = (theme: string) => {
	return theme === 'dark' ? 'light' : 'dark';
};

const toggleDegree = (degree: string) => {
	return degree === 'fahrenheit' ? 'celsius' : 'fahrenheit';
};

const isDarkMode = (theme: string) => {
	return theme === 'dark' ? true : false;
};
const isFahrenheit = (degree: string) => {
	return degree === 'fahrenheit' ? true : false;
};

const toggleMap = (isMapOpen: boolean) => {
	return isMapOpen === true ? false : true;
};

export const preferenceSlice: StateCreator<
	preferenceSlice,
	[],
	[['zustand/persist', preferenceSlice], ['zustand/immer', never]],
	preferenceSlice
> = persist(
	immer(
		(set, get): preferenceSlice => ({
			theme: 'dark',
			degree: 'celsius',
			isDarkMode: true,
			isFahrenheit: false,
			isMapOpen: false,

			toggleTheme: (theme: string) => {
				set(state => {
					state.theme = toggleTheme(theme);
					state.isDarkMode = isDarkMode(theme);
				});
			},
			toggleDegree: (degree: string) => {
				set(state => {
					state.degree = toggleDegree(degree);
					state.isFahrenheit = isFahrenheit(degree);
				});
			},
			toggleMap: (isMapOpen: boolean) => {
				set(state => {
					state.isMapOpen = toggleMap(isMapOpen);
				});
			},
		})
	),
	{
		name: 'weatherApp_Preference',
		getStorage: () => localStorage,
	}
);
