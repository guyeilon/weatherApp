import React from 'react';

import * as Styled from './styles';
import DesktopNavbar from './Desktop';
import MobileNavbar from './Mobile';
export interface DesktopNavbarProps {}

const Navbar: React.FC<DesktopNavbarProps> = () => {
	return (
		<Styled.NavbarWrapper>
			<DesktopNavbar />
			<MobileNavbar />
		</Styled.NavbarWrapper>
	);
};

export default Navbar;
