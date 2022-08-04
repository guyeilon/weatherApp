import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { SvgFav, SvgFb, SvgGoogle, SvgHome, SvgHomeFull, SvgLogout, SvgMap } from '../../assets/Svg.styles';

import * as Styled from './styles';

export type ButtonProps<T extends ElementType> = {
	renderAs?: T;
	login?: boolean;
	addToFav?: boolean;
	disabled?: boolean;
	svg?: string;
	navbar?: boolean;
	children: ReactNode;
	className?: string;
} & ComponentPropsWithoutRef<T>;

const Button = <T extends ElementType = 'button'>({
	renderAs,
	login,
	addToFav,
	children,
	navBar,
	svg,
	className,
	...rest
}: ButtonProps<T>): JSX.Element => {
	const IconToShow = (svg: string | undefined) => {
		switch (svg) {
			case 'fav':
				return <Styled.FavIcon />;
			case 'favorites':
				return <SvgFav width='30' height='30' />;
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
			case 'map':
				return <SvgMap width='30' height='30' />;

			default:
				break;
		}
	};
	return (
		<>
			<Styled.BTN
				as={renderAs as ElementType}
				addToFav={addToFav}
				login={login}
				svg={svg}
				{...rest}
				className={className}>
				<Styled.IconWrapper>{IconToShow(svg)}</Styled.IconWrapper>
				{children}
			</Styled.BTN>
		</>
	);
};

export default Button;
