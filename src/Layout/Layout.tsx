import { Outlet } from 'react-router-dom';
import Clouds from '../Components/Clouds';

import MobileFooter from '../Components/MobileFooter';

import Navbar from '../Components/Navbar';
const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			{/* <Clouds cloudsNum={5} /> */}
			<MobileFooter />
		</>
	);
};

export default Layout;
