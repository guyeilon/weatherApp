import React, { useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './design/globalStyle';

import { useSystemDesign } from './design/useSystemDesign';

import ThemeContext from './contexts/ThemeContext';

import './design/index.css';

import { useStore } from './App/store';

import Login from './Pages/Login';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Forecast from './Pages/Forecast';
import Clouds from './Components/Clouds';

const App: React.FC = () => {
	const { darkTheme, lightTheme } = useSystemDesign();
	const store = useStore(state => state);

	const themeMode = store.theme === 'light' ? lightTheme : darkTheme;
	useEffect(() => {
		store.getPermission();
	}, []);
	return (
		<ThemeContext>
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />
				<Clouds cloudsNum={10} />
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<Layout />}>
						<Route path='/' element={<Forecast />} />
						<Route path='/' element={<Forecast />} />
						<Route path='/fav' element={<Forecast />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</ThemeContext>
	);
};

export default App;
