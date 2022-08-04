import styled from 'styled-components/macro';
import { SvgNavbarLogo } from '../../assets/Svg.styles';
import Button from '../../Common/Button';
import Switcher from '../../Common/Switcher';

export const NavbarWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primary.background};
	box-shadow: ${({ theme }) => theme.boxShadows.desktopNavbar};

	min-width: 100%;
	height: 94px;

	display: inline-flex;
	align-items: center;

	justify-content: center;

	padding: 0 50px;

	@media only screen and (${({ theme }) => theme.media.desktop}) {
		padding: 0 70px;
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
	flex-basis: 80%;
	/* width: fit-content; */
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

	order: 7;
	@media only screen and (${({ theme }) => theme.media.desktop}) {
		order: 5;
		margin-right: 81px;
	}
`;
export const LogoutBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'logout',
	navbar: true,
}))`
	margin-left: auto;

	order: 8;

	@media only screen and (${({ theme }) => theme.media.desktop}) {
	}
`;

export const InputWrapper = styled.div`
	flex-basis: 100px;

	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.inputs.mainBg};
	border-radius: ${({ theme }) => theme.border.base};

	flex: 1;
	max-width: 372px;

	order: 4;

	margin-left: 47px;
	margin-right: 40px;
	@media only screen and (${({ theme }) => theme.media.desktop}) {
		margin-right: 124px;
	}
`;
export const searchInput = styled.input`
	font-size: ${({ theme }) => theme.textFontSize.base};
	line-height: 1.2;
	max-width: 372px;
	color: ${({ theme }) => theme.colors.inputs.textInputColor};

	::placeholder {
		color: ${({ theme }) => theme.colors.inputs.placeHolderColor};
	}
	background-color: ${({ theme }) => theme.colors.inputs.mainBg};
	border-radius: ${({ theme }) => theme.border.base};
	padding: 16px 24px;
`;
export const DegreeSwitcher = styled(Switcher)`
	flex-basis: 75px;

	margin-right: 30px;

	order: 5;

	@media only screen and (${({ theme }) => theme.media.desktop}) {
		order: 6;
	}
`;

export const ThemeSwitcher = styled(Switcher)`
	margin-right: 96px;
	order: 6;
	@media only screen and (${({ theme }) => theme.media.desktop}) {
		order: 7;
		margin-right: 72px;
	}
`;
