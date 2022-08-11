import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { SvgNavbarLogo } from '../../../assets/Svg.styles';
import Button from '../../../Common/Button';
import { IconWrapper } from '../../../Common/Button/styles';
import SearchInput from '../../../Common/SearchInput';
import Switcher from '../../../Common/Switcher';

export const DesktopContentWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primary.background};
	box-shadow: ${({ theme }) => theme.boxShadows.desktopNavbar};
	display: grid;
	grid-template-columns:
		[first] 40px [logo] 0.5fr [menu] 1.5fr
		[search] auto [switcher] 1.5fr [map] minmax(min-content, 0.25fr)
		[logout] minmax(min-content, 0.25fr) [last] 40px [end];

	grid-template-areas: '. logo menu input switcher map logout . ';

	align-items: center;
	justify-items: center;
	grid-gap: 10px;

	min-width: 100%;
	height: 94px;

	@media only screen and (${({ theme }) => theme.media.desktop}) {
		grid-template-columns:
			[first] 60px [logo] 0.5fr [menu] 1.5fr [search] auto [map] 1fr [switcher] 0.5fr
			[logout] 0.5fr [last] 60px [end];

		grid-template-areas: '. logo menu input map switcher  logout . ';
	}
	@media only screen and (${({ theme }) => theme.media.phone}) {
		display: none;
	}
`;

export const Logo = styled(SvgNavbarLogo)`
	grid-area: logo;
	justify-self: start;
`;

export const NavbarBtn = styled(Button)`
	width: fit-content;
`;
export const MenuWrapper = styled.div`
	grid-area: menu;
	display: flex;
	gap: 16px;
	justify-self: center;
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
	width: 120%;

	border-bottom: 3px solid #fff;
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
		display: block;
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

export const Input = styled(SearchInput)``;
export const InputWrapper = styled.div`
	grid-area: input;

	width: 372px;

	@media only screen and (${({ theme }) => theme.media.desktop}) {
		order: 4;
		width: 400px;
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
