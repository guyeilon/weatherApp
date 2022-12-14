import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import {
	SvgArrow,
	SvgFav,
	SvgFavFull,
	SvgFb,
	SvgGoogle,
	SvgHome,
	SvgHomeFull,
	SvgLayout,
	SvgLogout,
	SvgMap,
	SvgMapDark,
	SvgMenu,
	SvgSearch,
} from '../../assets/Svg.styles';

import * as Styled from './styles';

export type ButtonProps<T extends ElementType> = {
	renderAs?: T;
	login?: boolean;
	addToFav?: boolean;
	disabled?: boolean;
	svg?: svgTypes;
	navbar?: boolean;
	icon?: boolean;
	ghost?: boolean;
	secondary?: boolean;
	noHover?: boolean;
	children: ReactNode;
	className?: string;
} & ComponentPropsWithoutRef<T>;
type svgTypes =
	| 'fav'
	| 'favFull'
	| 'favorites'
	| 'fb'
	| 'google'
	| 'home'
	| 'homeFull'
	| 'logout'
	| 'logoutDark'
	| 'map'
	| 'mapDark'
	| 'menu'
	| 'search'
	| 'arrow'
	| 'favoritesFull'
	| 'whiteArrow'
	| 'layout'
	| 'layoutWhite'
	| undefined;

const Button = <T extends ElementType = 'button'>({
	renderAs,
	login,
	addToFav,
	children,
	navbar,
	icon,
	secondary,
	svg,
	ghost,
	className,
	noHover,
	...rest
}: ButtonProps<T>): JSX.Element => {
	const IconToShow = (svg: svgTypes) => {
		switch (svg) {
			case 'fav':
				return <Styled.FavIcon />;
			case 'favFull':
				return <SvgFav fulldark='true' outlinedark='true' width='24' height='24' />;
			case 'favorites':
				return <SvgFav width='30' height='30' />;
			case 'favoritesFull':
				return <SvgFavFull width='30' height='30' />;
			case 'fb':
				return <SvgFb />;
			case 'google':
				return <SvgGoogle />;
			case 'home':
				return <SvgHome width='30' height='30' />;
			case 'homeFull':
				return <SvgHomeFull width='30' height='30' />;
			case 'logout':
				return <SvgLogout width='30' height='30' />;
			case 'logoutDark':
				return <SvgLogout outlinedark='true' width='30' height='30' />;
			case 'map':
				return <SvgMap width='30' height='30' />;
			case 'mapDark':
				return <SvgMapDark width='30' height='30' />;
			case 'menu':
				return <SvgMenu width='30' height='30' />;
			case 'search':
				return <SvgSearch width='30' height='30' />;
			case 'arrow':
				return <SvgArrow width='30' height='30' />;
			case 'whiteArrow':
				return <SvgArrow full='true' width='30' height='30' />;
			case 'layout':
				return <SvgLayout width='30' height='30' />;
			case 'layoutWhite':
				return <SvgLayout full='true' width='30' height='30' />;

			default:
				break;
		}
	};
	return (
		<>
			<Styled.BTN
				as={renderAs as ElementType}
				addToFav={addToFav}
				secondary={secondary}
				login={login}
				navbar={navbar}
				icon={icon}
				svg={svg}
				ghost={ghost}
				noHover={noHover}
				{...rest}
				className={className}>
				<Styled.IconWrapper>{IconToShow(svg)}</Styled.IconWrapper>
				<Styled.BtnTxt>{children}</Styled.BtnTxt>
			</Styled.BTN>
		</>
	);
};

export default Button;
