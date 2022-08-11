import styled from 'styled-components/macro';
import Button from '../../../Common/Button';
import Switcher from '../../../Common/Switcher';

export const MobileContentWrapper = styled.div`
	display: block;

	@media only screen and (${({ theme }) => theme.media.abovePhone}) {
		display: none;
	}
`;
export const MobileNavbar = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 30px;
	margin-top: 30px;

	padding: 0 30px;
`;
export const NavbarBtn = styled(Button)`
	width: fit-content;
`;

export const MenuBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'menu',
	footer: true,
}))`
	margin-left: auto;
	align-self: flex-start;
`;

export const MobileModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px); /* background-color: rgba(140, 140, 140, 0.2); */

	backdrop-filter: blur(0.4rem);
	z-index: 2;

	height: 100vh;
	width: 100%;
`;

export const MobileMenu = styled.div`
	width: 100%;
	height: 416px;

	display: flex;
	flex-direction: column;

	position: fixed;
	top: auto;
	right: auto;
	left: auto;
	margin: 0 auto;
	bottom: 0;

	user-select: none;

	background-color: ${({ theme }) => theme.colors.modals.primaryBg};
	border-radius: ${({ theme }) => theme.border.modalUp};

	box-shadow: ${({ theme }) => theme.boxShadows.base};

	padding: 40px 30px;
`;

export const Header = styled.h2`
	color: ${({ theme }) => theme.colors.primary.modalText};
	font-size: ${({ theme }) => theme.headingFontSize.h2};
	line-height: 1.25;
`;

export const SwitcherWrapper = styled.div`
	margin-top: 36px;

	display: flex;
	flex-direction: column;
	width: 100%;

	gap: 36px;
`;

export const ThemeSwitcherWrapper = styled.div`
	display: flex;
	width: 100%;

	justify-content: space-between;
`;
export const DegreeSwitcherWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

export const MenuText = styled.div`
	align-self: center;
	line-height: 1.5;
	font-size: ${({ theme }) => theme.textFontSize.base};
	color: ${({ theme }) => theme.colors.primary.modalText};
`;

export const DegreeSwitcher = styled(Switcher)``;

export const ThemeSwitcher = styled(Switcher)``;

export const LogoutBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'logoutDark',
	navbar: true,
}))`
	margin: 0 auto;
	color: ${({ theme }) => theme.colors.primary.modalText};
	text-decoration: underline;

	margin-top: 122px;
`;

export const MobileFooter = styled.div`
	width: 100%;
	height: 80px;

	display: flex;
	flex-direction: row;

	justify-content: space-around;

	position: fixed;
	top: auto;
	right: auto;
	left: auto;
	margin: 0 auto;
	bottom: 0;

	background-color: rgba(255, 255, 255, 0.3);
	-webkit-backdrop-filter: blur(20px);
	backdrop-filter: blur(20px);
	border-top-right-radius: ${({ theme }) => theme.border.modal};
	border-top-left-radius: ${({ theme }) => theme.border.modal};
`;

export const HomeBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'home',
	footer: true,
}))``;

export const FavBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'favorites',
	footer: true,
}))``;
export const SearchBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'search',
	footer: true,
}))``;

export const Divider = styled.div`
	background-color: #fff;
	width: 1px;
	height: 46px;
	margin-top: 15px;
`;
