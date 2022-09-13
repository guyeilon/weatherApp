import React, { useEffect, useState } from 'react';
import { SvgCelsius, SvgFahrenheit, SvgMoon, SvgSun } from '../../assets/Svg.styles';
import * as Styled from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchCity from '../SearchCity';
import { useLogin } from '../User/hooks/useLogin';
import { usePreference } from '../../zustand/hooks/usePreference';
import { useForecast } from '../../zustand/hooks/useForecast';
import SearchInput from '../../Common/SearchInput';
import useInput from '../../Common/SearchInput/hooks/useInput';
import Modal from '../../Common/Modal';
import { motion } from 'framer-motion';

export interface DesktopNavbarProps {}

const DesktopNavbar: React.FC<DesktopNavbarProps> = () => {
	const { isDarkMode, isFahrenheit, toggleTheme, toggleDegree, theme, degree } = usePreference();

	const { setCityData } = useForecast();
	const { logout } = useLogin();

	const navigate = useNavigate();
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
		setCityData(undefined);
	};
	const [search, resetSearch, searchAttribute] = useInput('wetherApp_CitySearch', '');
	const [isFocused, setIsFocused] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);
	const closeModal = () => {
		setIsExpanded(false);
		resetSearch();
	};
	const show = !!search;

	useEffect(() => {
		if (!isExpanded) {
			show && setIsExpanded(true);
		} else {
			// !isFocused && closeModal();
			!show && setIsExpanded(false);
		}
	}, [show, isFocused]);

	return (
		<>
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
						<SearchInput
							placeHolder='Try "Tel Aviv - Jaffa"...'
							onFocus={() => setIsFocused(true)}
							// onBlur={() => setIsFocused(false)}
							{...searchAttribute}
						/>
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

					<Styled.MapBtn onClick={() => navigate('/map')}>
						<Styled.DesktopTxt>Switch to map</Styled.DesktopTxt>
					</Styled.MapBtn>

					<Styled.LogoutBtn onClick={() => logout()}>
						<Styled.DesktopTxt>Log out</Styled.DesktopTxt>
					</Styled.LogoutBtn>
				</Styled.Grid3>
			</Styled.DesktopContentWrapper>

			{isExpanded && (
				<Modal
					blur='main'
					padding='0 '
					width='476px'
					height='360px'
					position='top'
					isModalOpen={isExpanded}
					closeModal={() => setIsExpanded(false)}
					useCloseModal={false}>
					<SearchCity search={search} closeModal={closeModal} />
				</Modal>
			)}
		</>
	);
};

export default DesktopNavbar;
