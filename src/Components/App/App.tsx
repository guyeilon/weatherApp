import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import Toast from '../../Common/Toast';
import { GlobalStyles } from '../../design/globalStyle';

import { useGetThemeMode } from './hooks/useGetThemeMode';
import { Loading } from './Loading';
import { Routes } from './Routes';

const App = (): ReactElement => {
	const themeMode = useGetThemeMode();
	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<Loading />
			<Toast />
			{/* <Clouds cloudsNum={10} /> */}
			<Routes />
		</ThemeProvider>
	);
};

export default App;
