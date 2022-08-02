import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './design-foundation/globalStyle';

import { useSystemDesign } from './design-foundation/useSystemDesign';
import useThemeMode from './hooks/useThemeMode';
import ThemeContext from './contexts/ThemeContext';

import './design-foundation/index.css';
import { SvgMoon, SvgSun } from './assets/Svg.styles';

import Login from './Pages/Login';
import Switcher from './Common/Switcher';
import DesktopNavbar from './Components/DesktopNavbar';

const App: React.FC = () => {
	const { theme, themeToggler } = useThemeMode();
	const { darkTheme, lightTheme } = useSystemDesign();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;
	console.log(themeMode);

	const [isDark, setIsDark] = useState<boolean>(window.localStorage.getItem('theme') === 'dark' ? true : false);

	return (
		<ThemeContext>
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />
				<DesktopNavbar />
				{/* <Switcher
					isDark={isDark}
					leftSvg={<SvgSun height='24' width='24' />}
					rightSvg={<SvgMoon height='24' width='24' />}
					onClick={() => (themeToggler(), setIsDark(!isDark))}
				/> */}
				{/* <Login /> */}
			</ThemeProvider>
		</ThemeContext>
	);
};

export default App;
