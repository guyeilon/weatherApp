import { ReactElement, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Toast from '../../Common/Toast';
import { GlobalStyles } from '../../design/globalStyle';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useGetThemeMode } from './hooks/useGetThemeMode';

import { Loading } from './Loading';
import { Routes } from './Routes';
import { queryClient } from '../../react-query/queryClient';

import Clouds from '../Clouds';

const App = () => {
	const themeMode = useGetThemeMode();

	return (
		<ThemeProvider theme={themeMode}>
			<QueryClientProvider client={queryClient}>
				<GlobalStyles />
				<Loading />
				<Toast />
				<Clouds cloudsNum={10} />
				<Routes />
				<ReactQueryDevtools />
			</QueryClientProvider>
		</ThemeProvider>
	);
};

export default App;
