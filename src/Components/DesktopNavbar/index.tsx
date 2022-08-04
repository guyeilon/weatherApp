import React, { useState } from 'react';
import { SvgCelsius, SvgFahrenheit, SvgMoon, SvgNavbarLogo, SvgSearch, SvgSun, SvgTest } from '../../assets/Svg.styles';

import useStore from '../../App/store';

import * as Styled from './styles';
export interface DesktopNavbarProps {}

const DesktopNavbar: React.FC<DesktopNavbarProps> = () => {
	const store = useStore(state => state);
	return (
		<Styled.NavbarWrapper>
			<Styled.Logo />
			{/* <SvgTest width='85.8' height='56' /> */}
			<Styled.HomeBtn>Home</Styled.HomeBtn>
			<Styled.FavBtn>Favorites</Styled.FavBtn>
			<Styled.InputWrapper>
				<Styled.searchInput placeholder='Try "Tel Aviv - Jaffa"...' />

				<SvgSearch outlinedark='true' width='30' height='30' style={{ marginRight: '24px' }} />
			</Styled.InputWrapper>
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

			<Styled.MapBtn>
				<Styled.DesktopTxt>Switch to map</Styled.DesktopTxt>
			</Styled.MapBtn>
			<Styled.LogoutBtn>
				<Styled.DesktopTxt>Log out</Styled.DesktopTxt>
			</Styled.LogoutBtn>
		</Styled.NavbarWrapper>
	);
};

export default DesktopNavbar;
