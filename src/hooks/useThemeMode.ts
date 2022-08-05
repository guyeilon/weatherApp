import { useEffect, useState } from 'react';
// import usePersistentContext from './usePersistentContext';

export const useThemeMode = () => {
	const localTheme = window.localStorage.getItem('theme');
	const [theme, setTheme] = useState(localTheme ? localTheme : 'light');
	// const [themeData, setThemeData] = usePersistentContext('theme');

	const setMode = (mode: string) => {
		window.localStorage.setItem('theme', mode);
		// typeof setThemeData === 'function' && setThemeData(mode);

		setTheme(mode);
	};

	const themeToggler = () => (theme === 'dark' ? setMode('light') : setMode('dark'));

	useEffect(() => {
		// const localTheme = themeData;

		localTheme && setTheme(localTheme);

		// typeof localTheme === 'string' && setTheme(localTheme);
	}, [localTheme]);

	return { theme, themeToggler };
};

export default useThemeMode;
