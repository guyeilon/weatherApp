import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSystemDesign } from '../design-foundation/useSystemDesign';
import useThemeMode from '../hooks/useThemeMode';

interface ContextProps {
	children: React.ReactNode;
}

const ThemeContext: React.FC<ContextProps> = ({ children }) => {
	const { theme } = useThemeMode();
	const { darkTheme, lightTheme } = useSystemDesign();

	const themeMode = theme === 'dark' ? darkTheme : lightTheme;
	// console.log('themeMode from context:', themeMode);

	return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};

export default ThemeContext;
