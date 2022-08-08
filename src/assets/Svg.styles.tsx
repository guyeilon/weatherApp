import styled, { css } from 'styled-components/macro';

import { ReactComponent as Celsius } from './Svgs/celsius.svg';
import { ReactComponent as Fahrenheit } from './Svgs/fahrenheit.svg';
import { ReactComponent as Moon } from './Svgs/moon.svg';
import { ReactComponent as Sun } from './Svgs/sun.svg';
import { ReactComponent as Search } from './Svgs/search.svg';
import { ReactComponent as Home } from './Svgs/homeOutline.svg';
import { ReactComponent as HomeFull } from './Svgs/homeFull.svg';
import { ReactComponent as Logout } from './Svgs/logout.svg';
import { ReactComponent as Map } from './Svgs/map.svg';
import { ReactComponent as Menu } from './Svgs/menu.svg';
import { ReactComponent as Fav } from './Svgs/fav.svg';
import { ReactComponent as Google } from './Svgs/google.svg';
import { ReactComponent as Fb } from './Svgs/facebook.svg';
import { ReactComponent as Clouds } from './Svgs/clouds.svg';
import { ReactComponent as Test } from './Svgs/test-cropped.svg';
import { ReactComponent as Arrow } from './Svgs/arrow.svg';
import { ReactComponent as Location } from './Svgs/location.svg';
// import { ReactComponent as Loader } from './Svgs/loader.svg';

// export { Loader };
import Logo from './Logo';
import NavbarLogo from './NavbarLogo';

export interface SvgProps {
	height?: string;
	strokeColor?: string;
	fillColor?: string;
	width?: string;
	full?: any;
	outline?: any;
	fulldark?: any;
	outlinedark?: any;
}

const svgStyles = <
	T extends {
		height?: string;
		stroke?: string;
		fill?: string;
		width?: string;
		full?: boolean;
		outline?: boolean;
		fulldark?: boolean;
		outlinedark?: boolean;
	}
>({
	height,
	width,
	stroke,
	fill,
	full,
	outline,
	fulldark,
	outlinedark,
}: T) => {
	return css`
		height: ${height || '32px'};
		width: ${width || '32px'};
		& path {
			stroke: ${stroke && stroke};
		}
		& path {
			fill: ${fill && fill};
		}
		& path {
			fill: ${full && 'rgba(255, 255, 255, 1)'};
		}
		& path {
			stroke: ${outline && 'rgba(255, 255, 255, 1)'};
		}
		& path {
			fill: ${fulldark && 'rgba(68, 78, 114, 1)'};
		}
		& path {
			stroke: ${outlinedark && 'rgba(68, 78, 114, 1)'};
		}
	`;
};

export const SvgTest = styled(Test)<SvgProps>`
	${props => svgStyles(props)};
`;

export const SvgLocation = styled(Location)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgArrow = styled(Arrow)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgMenu = styled(Menu)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgMap = styled(Map)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgLogout = styled(Logout)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgCelsius = styled(Celsius)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgFahrenheit = styled(Fahrenheit)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgFav = styled(Fav)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgSearch = styled(Search)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgHome = styled(Home)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgHomeFull = styled(HomeFull)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgFb = styled(Fb)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgGoogle = styled(Google)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgSun = styled(Sun)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgMoon = styled(Moon)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgLogo = styled(Logo)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgClouds = styled(Clouds)<SvgProps>`
	${props => svgStyles(props)};
`;
export const SvgNavbarLogo = styled(NavbarLogo)<SvgProps>`
	${props => svgStyles(props)};
`;

export const LogoWrapper = styled.div`
	width: 85px;
	height: 56px;
	margin-top: 20px;
	margin-left: 50px;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		width: 148px;
		height: 97px;
		display: flex;
		margin: 0 auto;
		margin-top: 10px;
		margin-bottom: 31px;
	}
`;
export const NavbarLogoWrapper = styled.div`
	width: 80px;
	height: 56px;
	position: relative;

	margin-right: 16px;

	& svg {
		position: relative;
		top: -10px;
		left: -20px;
		transform: scale(0.59);
		width: 100%;
		/* padding-bottom: 1%; */
		height: 100%;
		overflow: visible;
	}

	@media only screen and (${({ theme }) => theme.media.phone}) {
	}
`;
