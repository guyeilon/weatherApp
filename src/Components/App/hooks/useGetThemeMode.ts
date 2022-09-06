import { useSystemDesign } from '../../../design/useSystemDesign';
import { usePreference } from '../../../hooks/usePreference';

export const useGetThemeMode = () => {
	const { darkTheme, lightTheme } = useSystemDesign();
	const { preference, isDarkMode } = usePreference();

	const themeMode = isDarkMode ? darkTheme : lightTheme;

	return themeMode;
};
