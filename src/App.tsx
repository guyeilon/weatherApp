import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './design/globalStyle';

import { useSystemDesign } from './design/useSystemDesign';
import useThemeMode from './hooks/useThemeMode';
import ThemeContext from './contexts/ThemeContext';

import './design/index.css';
import { SvgMoon, SvgSun } from './assets/Svg.styles';
import useStore from './App/store';
import Login from './Pages/Login';
import Switcher from './Common/Switcher';
import DesktopNavbar from './Components/DesktopNavbar';

const App: React.FC = () => {
	const { darkTheme, lightTheme } = useSystemDesign();
	const store = useStore(state => state);

	const themeMode = store.theme === 'light' ? lightTheme : darkTheme;

	return (
		<ThemeContext>
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />
				<DesktopNavbar />

				{/* <Login /> */}
			</ThemeProvider>
		</ThemeContext>
	);
};

export default App;
