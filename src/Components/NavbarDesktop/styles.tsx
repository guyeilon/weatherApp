import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { SvgNavbarLogo } from '../../assets/Svg.styles';
import Button from '../../Common/Button';
import { IconWrapper } from '../../Common/Button/styles';
import ReactTooltip from 'react-tooltip';
import Switcher from '../../Common/Switcher';

export const DesktopContentWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primary.background};
	box-shadow: ${({ theme }) => theme.boxShadows.desktopNavbar};
	display: grid;
	position: fixed;
	top: 0;
	z-index: 3;
	grid-template-columns: repeat(3, 1fr);

	grid-template-areas: 'grid1 grid2 grid3 ';
	padding: 0 60px;

	align-items: center;
	justify-items: center;
	grid-gap: 10px;

	min-width: 100%;
	height: 94px;

	@media only screen and (${({ theme }) => theme.media.desktop}) {
		padding: 0 70px;
	}
`;

export const Grid1 = styled.div`
	grid-area: grid1;
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	align-items: center;
	justify-items: center;
	grid-gap: 10px;
`;
export const Grid2 = styled.div`
	grid-area: grid2;
`;
export const Grid3 = styled.div`
	grid-area: grid3;
	display: grid;

	grid-template-columns: repeat(3, 1fr);
	@media only screen and (${({ theme }) => theme.media.desktop}) {
		grid-template-areas: 'map switcher logout ';
	}
	@media only screen and (${({ theme }) => theme.media.tablet}) {
		grid-template-areas: ' switcher map logout ';
	}

	align-items: center;
	justify-items: center;
	grid-gap: 10px;
`;

export const Logo = styled(SvgNavbarLogo)`
	justify-self: start;
`;

export const NavbarBtn = styled(Button)`
	width: fit-content;
`;
export const MenuWrapper = styled.div`
	display: flex;
	gap: 16px;
	justify-self: end;

	@media only screen and (${({ theme }) => theme.media.desktop}) {
		gap: 46px;
	}
`;

export const HomeBtn = styled(NavbarBtn).attrs(props => ({
	navbar: true,
	children: 'Home',
}))`
	justify-self: start;
	border-bottom: 2px solid transparent;
`;

export const FavBtn = styled(NavbarBtn).attrs(props => ({
	navbar: true,
	children: 'Favorites',
}))`
	justify-self: start;
	border-bottom: 2px solid transparent;
`;
export const LinkBorder = styled.div`
	margin: 0 auto;
	width: 100%;

	border-bottom: 5px solid #fff;
	display: none;
	bottom: -25px;
	margin: auto 0;
	/* right: 5px; */
	position: absolute;
`;

export const RouterWrap = styled(NavLink)`
	position: relative;
	&.active > div {
		display: block;
	}
`;

export const DesktopTxt = styled.div`
	text-decoration: underline;
	font-weight: 500;
	display: none;
	@media only screen and (${({ theme }) => theme.media.desktop}) {
		display: flex;
		justify-content: center;
		align-items: center;
		vertical-align: middle;
	}
`;
export const MapBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'map',
	navbar: true,
}))`
	@media only screen and (${({ theme }) => theme.media.underDesktop}) {
		${IconWrapper} {
			margin-right: 0;
		}
	}

	grid-area: map;
	justify-self: end;
	/* align-self: center; */

	@media only screen and (${({ theme }) => theme.media.desktop}) {
		justify-self: center;
	}
`;
export const LogoutBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'logout',
	navbar: true,
}))`
	@media only screen and (${({ theme }) => theme.media.underDesktop}) {
		${IconWrapper} {
			margin-right: 0;
		}
	}

	grid-area: logout;
	justify-self: end;
`;

export const InputWrapper = styled.div`
	max-width: 372px;
	justify-self: center;

	@media only screen and (${({ theme }) => theme.media.desktop}) {
		order: 4;
		max-width: 400px;
	}
`;

export const SwitcherWrapper = styled.div`
	grid-area: switcher;

	display: flex;

	@media only screen and (${({ theme }) => theme.media.desktop}) {
		order: 6;
	}
`;
export const DegreeSwitcher = styled(Switcher)`
	flex-basis: 75px;

	margin-right: 30px;
`;

export const ThemeSwitcher = styled(Switcher)``;

export const Tooltip = styled(ReactTooltip)`
	max-width: 300px !important;
	background-color: rgba(0, 0, 0, 0.1) !important;
	color: #fff !important;
	box-shadow: 0 0 25px rgba(0, 0, 0, 0.1) !important;
	border-radius: 5px !important;
	padding: 1rem !important;
	text-align: center !important;
	line-height: 1.5 !important;
	opacity: 1 !important;
`;
