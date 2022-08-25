import { useEffect, useState } from 'react';

export const useThemeMode = () => {
	const localTheme = window.localStorage.getItem('theme');
	const [theme, setTheme] = useState(localTheme ? localTheme : 'light');

	const setMode = (mode: string) => {
		window.localStorage.setItem('theme', mode);

		setTheme(mode);
	};

	const themeToggler = () => (theme === 'dark' ? setMode('light') : setMode('dark'));

	useEffect(() => {
		localTheme && setTheme(localTheme);
	}, [localTheme]);

	return { theme, themeToggler };
};

export default useThemeMode;
