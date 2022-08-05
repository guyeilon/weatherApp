import React, { useState } from 'react';
import useStore from '../../../App/store';
import { SvgCelsius, SvgFahrenheit, SvgMoon, SvgSearch, SvgSun } from '../../../assets/Svg.styles';
import { motion, Variants, AnimatePresence } from 'framer-motion';

import * as Styled from './styles';
import SearchInput from '../../../Common/SearchInput';
export interface DesktopNavbar {}

const DesktopNavbar: React.FC<DesktopNavbar> = () => {
	const store = useStore(state => state);

	return (
		<Styled.ContentWrapper>
			<Styled.Logo />
			<Styled.HomeBtn>Home</Styled.HomeBtn>
			<Styled.FavBtn>Favorites</Styled.FavBtn>
			<Styled.InputWrapper>{/* <Styled.Input /> */}</Styled.InputWrapper>

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
		</Styled.ContentWrapper>
	);
};

export default DesktopNavbar;
