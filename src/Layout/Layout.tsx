import { Outlet } from 'react-router-dom';
import Clouds from '../Components/Clouds';

import MobileFooter from '../Components/MobileFooter';

import Navbar from '../Components/Navbar';
const Layout = () => {
	return (
		<>
			<Navbar />
			<Clouds cloudsNum={10} />
			<Outlet />
			<MobileFooter />
		</>
	);
};

export default Layout;
