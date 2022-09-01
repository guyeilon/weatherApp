import { useSystemDesign } from '../../../design/useSystemDesign';
import { useStore } from '../../../zustand/store';

export const useGetThemeMode = () => {
	const { darkTheme, lightTheme } = useSystemDesign();
	const store = useStore(state => state);

	const themeMode = store.theme === 'light' ? lightTheme : darkTheme;

	return themeMode;
};
