import { usePreferenceStore } from '../zustand/store';

export const usePreference = () => {
	const preference = usePreferenceStore(state => state);
	const isDarkMode = preference.theme === 'dark';
	const isFahrenheit = preference.degree === 'fahrenheit';

	return { preference, isDarkMode, isFahrenheit };
};
