import { useSystemDesign } from '../../../design/useSystemDesign';
import { usePreference } from '../../../hooks/usePreference';

export const useGetThemeMode = () => {
	const { darkTheme, lightTheme } = useSystemDesign();
	const { preference } = usePreference();

	const themeMode = preference.theme === 'light' ? lightTheme : darkTheme;

	return themeMode;
};
