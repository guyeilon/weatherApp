import { ReactElement } from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

import Favorites from '../../Pages/Favorites';
import Forecast from '../Forecasts';
import Login from '../../Pages/Login';
import Layout from './Layout';

export const Routes = (): ReactElement => {
	return (
		<RouterRoutes>
			<Route path='/login' element={<Login />} />
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Forecast />} />
				<Route path='/favorites' element={<Favorites />} />
			</Route>
		</RouterRoutes>
	);
};
