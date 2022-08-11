import React, { useEffect, useRef, useState } from 'react';
import useStore from '../../../App/store';
import { SvgCelsius, SvgFahrenheit, SvgMoon, SvgSearch, SvgSun } from '../../../assets/Svg.styles';

import * as Styled from './styles';

import { NavLink, useLocation, useParams } from 'react-router-dom';
export interface DesktopNavbarProps {}

const DesktopNavbar: React.FC<DesktopNavbarProps> = () => {
	const store = useStore(state => state);
	const location = useLocation();

	const currentLocation = location.pathname.substring(1);

	const [activeHome, setActiveHome] = useState(false);
	const [activeFav, setActiveFav] = useState(false);

	useEffect(() => {
		if (currentLocation === 'home') {
			setActiveHome(true);
			setActiveFav(false);
		}
		if (currentLocation === 'fav') {
			setActiveFav(true);
			setActiveHome(false);
		}
	}, [currentLocation]);

	return (
		<Styled.DesktopContentWrapper>
			<Styled.Logo />
			<Styled.MenuWrapper>
				<Styled.RouterWrap to='/home'>
					<Styled.HomeBtn svg={activeHome ? 'homeFull' : 'home'} />
					<Styled.LinkBorder />
				</Styled.RouterWrap>
				<Styled.RouterWrap to='/fav'>
					<Styled.FavBtn svg={activeFav ? 'favoritesFull' : 'favorites'} />
					<Styled.LinkBorder />
				</Styled.RouterWrap>
			</Styled.MenuWrapper>
			<Styled.InputWrapper>
				<Styled.Input />
			</Styled.InputWrapper>

			<Styled.SwitcherWrapper>
				<Styled.DegreeSwitcher
					isChecked={store.degree === 'fahrenheit'}
					leftSvg={<SvgCelsius height='24' width='24' />}
					rightSvg={<SvgFahrenheit height='24' width='24' />}
					onClick={() => store.toggleDegree(store.degree)}
				/>
				<Styled.ThemeSwitcher
					isChecked={store.theme === 'dark'}
					leftSvg={<SvgSun height='24' width='24' />}
					rightSvg={<SvgMoon height='24' width='24' />}
					onClick={() => store.toggleTheme(store.theme)}
				/>
			</Styled.SwitcherWrapper>
			<Styled.MapBtn>
				<Styled.DesktopTxt>Switch to map</Styled.DesktopTxt>
			</Styled.MapBtn>
			<Styled.LogoutBtn>
				<Styled.DesktopTxt>Log out</Styled.DesktopTxt>
			</Styled.LogoutBtn>
		</Styled.DesktopContentWrapper>
	);
};

export default DesktopNavbar;
