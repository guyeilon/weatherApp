import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import { MOBILE_WIDTH } from '../../constants';
import { useWindowSize } from '../../hooks/useWindowSize';
import Clouds from '../Clouds';
import MobileFooter from '../MobileFooter';
import Navbar from '../Navbar';

const Wrapper = styled.div`
	overflow-x: hidden;
	position: relative;
	height: 100vh;
`;

const Layout = () => {
	const { width: screenWidth } = useWindowSize();
	const location = useLocation();
	const currentLocation = location.pathname.substring(1);
	const mapOnMobile = currentLocation === 'map' && screenWidth <= MOBILE_WIDTH;
	return (
		<>
			<Wrapper>
				<Clouds cloudsNum={10} />
				{!mapOnMobile && <Navbar />}
				<Outlet />
				<MobileFooter />
			</Wrapper>
		</>
	);
};

export default Layout;
