import { Outlet } from 'react-router-dom';
import MobileFooter from '../Components/MobileFooter';

import Navbar from '../Components/Navbar';
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
