import { ReactElement } from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

import Favorites from '../../Pages/Favorites';
import Forecast from '../Forecasts';
import Login from '../User';

import Layout from './Layout';
import RequireAuth from './RequireAuth';

export const Routes = (): ReactElement => {
	return (
		<RouterRoutes>
			{/* public routes */}
			<Route path='/login' element={<Login />} />

			{/* protected routes */}
			<Route element={<RequireAuth />}>
				<Route path='/' element={<Layout />}>
					<Route path='/home' element={<Forecast />} />
					<Route path='/favorites' element={<Favorites />} />
				</Route>
			</Route>
		</RouterRoutes>
	);
};
