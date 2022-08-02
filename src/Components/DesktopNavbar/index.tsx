import React from 'react';
import Button from '../../Common/Button';
import * as Styled from './styles';
export interface DesktopNavbarProps {}

const DesktopNavbar: React.FC<DesktopNavbarProps> = Props => {
	return (
		<Styled.NavbarWrapper>
			<Styled.Logo />
			<Styled.NavbarBtn navbar svg='home'>
				Home
			</Styled.NavbarBtn>
			<Styled.NavbarBtn navbar svg='favorites'>
				Favorites
			</Styled.NavbarBtn>
			<Styled.searchInput placeholder='Tey "Tel Aviv - Jaffa"...' />
		</Styled.NavbarWrapper>
	);
};

export default DesktopNavbar;
