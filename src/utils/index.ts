export const getInitialThemeMode = () => {
	// if (typeof window !== 'undefined') {
	const persistedColorPreference = localStorage.getItem('themeMode');
	const hasPersistedPreference = typeof persistedColorPreference === 'string';
	if (hasPersistedPreference) {
		console.log(persistedColorPreference);

		return persistedColorPreference;
	} else {
		return 'light';
	}
	// }

	// return 'light';
};
