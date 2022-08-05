import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './design/globalStyle';

import { useSystemDesign } from './design/useSystemDesign';

import ThemeContext from './contexts/ThemeContext';

import './design/index.css';

import useStore from './App/store';

import Navbar from './Components/Navbar';

const App: React.FC = () => {
	const { darkTheme, lightTheme } = useSystemDesign();
	const store = useStore(state => state);

	const themeMode = store.theme === 'light' ? lightTheme : darkTheme;

	return (
		<ThemeContext>
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />
				{/* <Navbar /> */}

				{/* <Login /> */}
			</ThemeProvider>
		</ThemeContext>
	);
};

export default App;
