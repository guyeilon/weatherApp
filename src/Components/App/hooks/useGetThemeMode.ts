import { useSystemDesign } from '../../../design/useSystemDesign';
import { useAppStore } from '../../../zustand/store';

export const useGetThemeMode = () => {
	const { darkTheme, lightTheme } = useSystemDesign();
	const store = useAppStore(state => state);

	const themeMode = store.theme === 'light' ? lightTheme : darkTheme;

	return themeMode;
};
