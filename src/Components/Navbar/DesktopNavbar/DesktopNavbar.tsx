import React, { useEffect, useState } from 'react';
import { SvgCelsius, SvgFahrenheit, SvgMoon, SvgSun } from '../../../assets/Svg.styles';
import * as Styled from './styles';
import { useLocation } from 'react-router-dom';
import SearchCity from '../../SearchCity';
import { useLogin } from '../../User/hooks/useLogin';
import { usePreference } from '../../../zustand/hooks/usePreference';
import { useForecast } from '../../../zustand/hooks/useForecast';

export interface DesktopNavbarProps {}

const DesktopNavbar: React.FC<DesktopNavbarProps> = () => {
	const { isDarkMode, isFahrenheit, toggleTheme, toggleDegree, theme, degree } = usePreference();

	const { setCityKey, setCityName } = useForecast();
	const { logout } = useLogin();

	const location = useLocation();
	const currentLocation = location.pathname.substring(1);

	const [activeHome, setActiveHome] = useState(currentLocation === '' ? true : false);
	const [activeFav, setActiveFav] = useState(currentLocation === 'favorites' ? true : false);

	useEffect(() => {
		if (currentLocation === '') {
			setActiveHome(true);
			setActiveFav(false);
		}
		if (currentLocation === 'favorites') {
			setActiveFav(true);
			setActiveHome(false);
		}
	}, [currentLocation]);

	const handleClick = () => {
		setCityKey(undefined);
		setCityName(undefined);
	};

	return (
		<Styled.DesktopContentWrapper>
			<Styled.Grid1>
				<Styled.Logo />
				<Styled.MenuWrapper>
					<Styled.RouterWrap to='/'>
						<Styled.HomeBtn svg={activeHome ? 'homeFull' : 'home'} onClick={handleClick} />
						<Styled.LinkBorder />
					</Styled.RouterWrap>
					<Styled.RouterWrap to='/favorites'>
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
						isChecked={isFahrenheit}
						leftSvg={<SvgCelsius height='24' width='24' />}
						rightSvg={<SvgFahrenheit height='24' width='24' />}
						onClick={() => toggleDegree(degree)}
					/>
					<Styled.ThemeSwitcher
						isChecked={isDarkMode}
						leftSvg={<SvgSun height='24' width='24' />}
						rightSvg={<SvgMoon height='24' width='24' />}
						onClick={() => toggleTheme(theme)}
					/>
				</Styled.SwitcherWrapper>
				<Styled.MapBtn>
					<Styled.DesktopTxt>Switch to map</Styled.DesktopTxt>
				</Styled.MapBtn>
				<Styled.LogoutBtn onClick={() => logout()}>
					<Styled.DesktopTxt>Log out</Styled.DesktopTxt>
				</Styled.LogoutBtn>
			</Styled.Grid3>
		</Styled.DesktopContentWrapper>
	);
};

export default DesktopNavbar;
