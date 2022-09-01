import { Outlet } from 'react-router-dom';

import MobileFooter from '../MobileFooter';

import Navbar from '../Navbar';
const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<MobileFooter />
		</>
	);
};

export default Layout;
