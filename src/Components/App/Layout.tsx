import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';
import Clouds from '../Clouds';
import MobileFooter from '../MobileFooter';
import Navbar from '../Navbar';

const Wrapper = styled.div`
	overflow-x: hidden;
	position: relative;
	height: 100vh;
`;
const Layout = () => {
	return (
		<>
			<Wrapper>
				<Navbar />
				<Outlet />
				<Clouds cloudsNum={10} />
				<MobileFooter />
			</Wrapper>
		</>
	);
};

export default Layout;
