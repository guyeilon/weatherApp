import { ReactElement } from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Favorites from '../Favorites';
import Forecast from '../Forecasts';
import Map from '../Map';
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
					<Route path='/' element={<Forecast />} />
					<Route path='/favorites' element={<Favorites />} />
					{/* <Route path='/map' element={<Map />} /> */}
				</Route>
			</Route>
		</RouterRoutes>
	);
};
