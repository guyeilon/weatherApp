import styled from 'styled-components/macro';
import { SvgNavbarLogo } from '../../../assets/Svg.styles';
import Button from '../../../Common/Button';
import SearchInput from '../../../Common/SearchInput';
import Switcher from '../../../Common/Switcher';

export const ContentWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primary.background};
	box-shadow: ${({ theme }) => theme.boxShadows.desktopNavbar};
	display: inline-flex;
	align-items: center;
	justify-content: space-between;

	min-width: 100%;
	height: 94px;

	padding: 0 50px;
	@media only screen and (${({ theme }) => theme.media.desktop}) {
		padding: 0 70px;
	}
	@media only screen and (${({ theme }) => theme.media.phone}) {
		display: none;
	}
`;

export const Logo = styled(SvgNavbarLogo)`
	order: 1;
	margin-right: 28px;
	@media only screen and (${({ theme }) => theme.media.desktop}) {
		margin-right: 190px;
	}
`;

export const NavbarBtn = styled(Button)`
	/* flex-basis: 50%; */
	width: fit-content;
`;
export const HomeBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'home',
	navbar: true,
}))`
	margin-right: 32px;

	order: 2;

	@media only screen and (${({ theme }) => theme.media.desktop}) {
		margin-right: 48px;
	}
`;
export const FavBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'favorites',
	navbar: true,
}))`
	margin-right: 56px;

	order: 3;

	@media only screen and (${({ theme }) => theme.media.desktop}) {
		margin-right: 139px;
	}
`;

export const DesktopTxt = styled.div`
	text-decoration: underline;
	font-weight: 500;
	display: none;
	@media only screen and (${({ theme }) => theme.media.desktop}) {
		display: block;
	}
`;
export const MapBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'map',
	navbar: true,
}))`
	margin-right: 32px;

	order: 6;
	@media only screen and (${({ theme }) => theme.media.desktop}) {
		order: 5;
		margin-right: 81px;
	}
`;
export const LogoutBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'logout',
	navbar: true,
}))`
	/* margin-left: auto; */

	order: 7;

	@media only screen and (${({ theme }) => theme.media.desktop}) {
	}
`;

export const Input = styled(SearchInput)``;
export const InputWrapper = styled.div`
	order: 4;
	width: 372px;
	margin-right: 40px;
	@media only screen and (${({ theme }) => theme.media.desktop}) {
		order: 4;
		width: 400px;
		margin-right: 124px;
	}
`;

export const SwitcherWrapper = styled.div`
	order: 5;

	display: flex;

	@media only screen and (${({ theme }) => theme.media.desktop}) {
		order: 6;
	}
`;
export const DegreeSwitcher = styled(Switcher)`
	flex-basis: 75px;

	margin-right: 30px;
`;

export const ThemeSwitcher = styled(Switcher)`
	margin-right: 96px;
`;

export const MobileMenu = styled.div`
	display: none;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		display: block;
	}
`;

export const MobileContent = styled.div`
	display: block;
	height: 100vh;

	@media only screen and (${({ theme }) => theme.media.desktop}) {
		display: none;
	}
	@media only screen and (${({ theme }) => theme.media.tablet}) {
		display: none;
	}
`;
export const MobileNavbar = styled.div`
	background: transparent;
	display: inline-flex;
	align-items: center;

	min-width: 100%;
	height: 30px;
	margin-top: 30px;

	padding: 0 30px;
`;

export const MenuBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'menu',
	navbar: true,
}))`
	margin-left: auto;
`;

export const MobileModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	-webkit-backdrop-filter: blur(10px);
	/* backdrop-filter: blur(10px); */
	/* background-color: rgba(140, 140, 140, 0.2); */
	/* background-color: rgba(140, 140, 140, 0.2); */
	backdrop-filter: blur(0.4rem);
	z-index: 2;

	height: 100vh;
	width: 100%;
`;

export const mobileMenu = styled.div`
	width: 100%;
	height: 416px;

	position: fixed;
	top: auto;
	right: auto;
	left: auto;
	margin: 0 auto;
	bottom: 0;

	user-select: none;

	background-color: ${({ theme }) => theme.colors.modals.primaryBg};
	border-top-right-radius: ${({ theme }) => theme.border.modal};
	border-top-left-radius: ${({ theme }) => theme.border.modal};
	box-shadow: ${({ theme }) => theme.boxShadows.base};
`;
