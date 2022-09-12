import { usePreferenceStore } from '../store';

export const usePreference = () => {
	const theme = usePreferenceStore(state => state.theme);
	const degree = usePreferenceStore(state => state.degree);
	const toggleTheme = usePreferenceStore(state => state.toggleTheme);
	const toggleDegree = usePreferenceStore(state => state.toggleDegree);
	const isDarkMode = usePreferenceStore(state => state.isDarkMode);
	const isFahrenheit = usePreferenceStore(state => state.isFahrenheit);

	return { isDarkMode, isFahrenheit, toggleTheme, toggleDegree, theme, degree };
};
