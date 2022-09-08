import { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type preferenceSlice = {
	theme: string;
	degree: string;
	toggleTheme: (theme: string) => void;
	toggleDegree: (degree: string) => void;
	isDarkMode: boolean;
	isFahrenheit: boolean;
};

// const isDarkMode = theme === 'dark';
// const isFahrenheit = degree === 'fahrenheit';

const toggleTheme = (theme: string) => {
	return theme === 'dark' ? 'light' : 'dark';
};

const toggleDegree = (degree: string) => {
	return degree === 'fahrenheit' ? 'celsius' : 'fahrenheit';
};

export const preferenceSlice: StateCreator<
	preferenceSlice,
	[],
	[['zustand/persist', preferenceSlice], ['zustand/immer', never]],
	preferenceSlice
> = persist(
	immer(
		(set, get): preferenceSlice => ({
			theme: 'light',
			degree: 'celsius',
			isDarkMode: false,
			isFahrenheit: true,

			toggleTheme: (theme: string) => {
				const isDarkMode = get().isDarkMode;
				set(state => {
					state.theme = toggleTheme(theme);
					state.isDarkMode = !isDarkMode;
				});
			},
			toggleDegree: (degree: string) => {
				const isFahrenheit = get().isFahrenheit;
				set(state => {
					state.degree = toggleDegree(degree);
					state.isFahrenheit = !isFahrenheit;
				});
			},
		})
	),
	{
		name: 'weatherAppPreference',
		getStorage: () => localStorage,
	}
);
