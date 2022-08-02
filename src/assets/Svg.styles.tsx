import styled, { css } from 'styled-components/macro';

import { ReactComponent as Celsius } from './Svgs/celsius.svg';
import { ReactComponent as Fahrenheit } from './Svgs/fahrenheit.svg';
import { ReactComponent as Moon } from './Svgs/moon.svg';
import { ReactComponent as Sun } from './Svgs/sun.svg';

import { ReactComponent as Home } from './Svgs/homeOutline.svg';
import { ReactComponent as HomeFull } from './Svgs/homeFull.svg';
import { ReactComponent as Logout } from './Svgs/logout.svg';

import { ReactComponent as NavbarLogo } from './Svgs/navbarLogo.svg';
import { ReactComponent as FavFull } from './Svgs/favFull.svg';
import { ReactComponent as Fav } from './Svgs/fav.svg';
import { ReactComponent as Google } from './Svgs/google.svg';
import { ReactComponent as Fb } from './Svgs/facebook.svg';
import { ReactComponent as Clouds } from './Svgs/clouds.svg';

import Logo from './Logo';

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

export const SvgFav = styled(Fav)<SvgProps>`
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
	width: 122px;
	height: 79px;
	margin-top: 20px;
	margin-left: 50px;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		width: 148px;
		height: 97px;
		display: flex;
		margin: 0 auto;
		margin-top: 7.4px;
		margin-bottom: 31px;
	}
`;
