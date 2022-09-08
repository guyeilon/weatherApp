import { useSystemDesign } from '../../../design/useSystemDesign';
import { usePreference } from '../../../zustand/hooks/usePreference';

export const useGetThemeMode = () => {
	const { darkTheme, lightTheme } = useSystemDesign();
	const { isDarkMode } = usePreference();

	const themeMode = isDarkMode ? darkTheme : lightTheme;

	return themeMode;
};
