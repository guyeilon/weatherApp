import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';

import { useWindowSize } from '../../hooks/useWindowSize';
import { usePreference } from '../../zustand/hooks/usePreference';
import Clouds from '../Clouds';
import MobileFooter from '../Footer';
import Navbar from '../Navbar';

const Wrapper = styled.div`
	overflow-x: hidden;
	position: relative;
	height: calc(100vh + 80px);
`;

const Layout = () => {
	const { isMobile } = useWindowSize();
	const { isMapOpen } = usePreference();
	const mapOnMobile = isMapOpen && isMobile;
	return (
		<>
			{/* <Wrapper> */}
			{!isMobile && <Clouds cloudsNum={10} />}
			{!mapOnMobile && <Navbar />}
			<Outlet />
			<MobileFooter />
			{/* </Wrapper> */}
		</>
	);
};

export default Layout;
