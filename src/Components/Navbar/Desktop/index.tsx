import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '../../../App/store';
import { SvgCelsius, SvgFahrenheit, SvgMoon, SvgSearch, SvgSun } from '../../../assets/Svg.styles';

import * as Styled from './styles';

import { NavLink, useLocation, useParams } from 'react-router-dom';
import SearchCity from '../../SearchCity';
export interface DesktopNavbarProps {}

const DesktopNavbar: React.FC<DesktopNavbarProps> = () => {
	const store = useStore(state => state);
	const location = useLocation();

	const currentLocation = location.pathname.substring(1);

	const [activeHome, setActiveHome] = useState(currentLocation === '' ? true : false);
	const [activeFav, setActiveFav] = useState(currentLocation === 'fav' ? true : false);

	useEffect(() => {
		if (currentLocation === '') {
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
			<Styled.Grid1>
				<Styled.Logo />
				<Styled.MenuWrapper>
					<Styled.RouterWrap to='/'>
						<Styled.HomeBtn svg={activeHome ? 'homeFull' : 'home'} />
						<Styled.LinkBorder />
					</Styled.RouterWrap>
					<Styled.RouterWrap to='/fav'>
						<Styled.FavBtn svg={activeFav ? 'favoritesFull' : 'favorites'} />
						<Styled.LinkBorder />
					</Styled.RouterWrap>
				</Styled.MenuWrapper>
			</Styled.Grid1>
			<Styled.Grid2>
				<Styled.InputWrapper>
					<SearchCity />
				</Styled.InputWrapper>
			</Styled.Grid2>
			<Styled.Grid3>
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
			</Styled.Grid3>
		</Styled.DesktopContentWrapper>
	);
};

export default DesktopNavbar;
