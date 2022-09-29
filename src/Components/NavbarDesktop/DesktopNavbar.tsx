import React, { useEffect, useState } from 'react';
import { SvgCelsius, SvgFahrenheit, SvgMoon, SvgSun } from '../../assets/Svg.styles';
import * as Styled from './styles';
import { useLocation } from 'react-router-dom';
import SearchCity from '../SearchCity';
import { useLogin } from '../User/hooks/useLogin';
import { usePreference } from '../../zustand/hooks/usePreference';
import { useForecast } from '../../zustand/hooks/useForecast';
import SearchInput from '../../Common/SearchInput';
import useInput from '../../Common/SearchInput/hooks/useInput';
import Modal from '../../Common/Modal';
import ConfirmMessage from '../../Common/ConfirmMessage';

export interface DesktopNavbarProps {}

const DesktopNavbar: React.FC<DesktopNavbarProps> = () => {
	const { isDarkMode, isFahrenheit, toggleTheme, toggleDegree, theme, degree, toggleMap, isMapOpen } =
		usePreference();

	const { setCityData } = useForecast();
	const { logout } = useLogin();

	const location = useLocation();
	const currLocation = location.pathname;

	const [activeHome, setActiveHome] = useState(currLocation === '/' ? true : false);
	const [activeFav, setActiveFav] = useState(currLocation === '/favorites' ? true : false);

	useEffect(() => {
		if (currLocation === '/') {
			setActiveHome(true);
			setActiveFav(false);
		}
		if (currLocation === '/favorites') {
			setActiveFav(true);
			setActiveHome(false);
		}
	}, [location]);

	const handleHomeClick = () => {
		setCityData(undefined);
		// toggleMap(false);
	};
	const handleFavClick = () => {
		toggleMap(true);
	};
	const [search, resetSearch, searchAttribute] = useInput('weatherApp_CitySearch', '');
	const [isFocused, setIsFocused] = useState(false);
	const [isSearchExpanded, setIsSearchExpanded] = useState(false);
	const [isLogoutMsgExpanded, setIsLogoutMsgExpanded] = useState(false);
	const closeModal = () => {
		setIsSearchExpanded(false);
		resetSearch();
	};
	const show = !!search;

	const handelLogout = () => {
		setIsLogoutMsgExpanded(true);
	};

	useEffect(() => {
		if (!isSearchExpanded) {
			show && setIsSearchExpanded(true);
		} else {
			// !isFocused && closeModal();
			!show && setIsSearchExpanded(false);
		}
	}, [show, isFocused]);

	return (
		<>
			<Styled.DesktopContentWrapper>
				<Styled.Grid1>
					<Styled.Logo />
					<Styled.MenuWrapper>
						<Styled.RouterWrap to='/'>
							<Styled.HomeBtn svg={activeHome ? 'homeFull' : 'home'} onClick={handleHomeClick} />
							<Styled.LinkBorder />
						</Styled.RouterWrap>
						<Styled.RouterWrap to='/favorites'>
							<Styled.FavBtn svg={activeFav ? 'favoritesFull' : 'favorites'} onClick={handleFavClick} />
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
							navbar
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
							onClick={() => {
								toggleTheme(theme);
							}}
						/>
					</Styled.SwitcherWrapper>

					<Styled.MapBtn svg={isMapOpen ? 'layoutWhite' : 'map'} onClick={() => toggleMap(isMapOpen)}>
						<Styled.DesktopTxt>{isMapOpen ? 'Layout' : 'Switch to map'}</Styled.DesktopTxt>
					</Styled.MapBtn>

					<Styled.LogoutBtn onClick={() => handelLogout()}>
						<Styled.DesktopTxt>Log out</Styled.DesktopTxt>
					</Styled.LogoutBtn>
				</Styled.Grid3>
			</Styled.DesktopContentWrapper>

			{isSearchExpanded && (
				<Modal
					blur='main'
					padding='0 '
					width='476px'
					height='360px'
					position='top'
					isModalOpen={isSearchExpanded}
					closeModal={closeModal}
					useCloseModal={true}>
					<SearchCity search={search} closeModal={closeModal} />
				</Modal>
			)}
			{isLogoutMsgExpanded && (
				<Modal
					blur='main'
					padding='48px 48px '
					width='500px'
					height='308px'
					position='top'
					isModalOpen={isLogoutMsgExpanded}
					closeModal={() => setIsLogoutMsgExpanded(false)}
					useCloseModal={true}>
					<ConfirmMessage
						header={'Log out'}
						body={`You about to log out from WeatherApp. Are you sure you want to log out?`}
						cancel={'I want to stay'}
						approveFn={logout}
						cancelFn={() => setIsLogoutMsgExpanded(false)}
						approve={'Yes, log out'}
					/>
				</Modal>
			)}
		</>
	);
};

export default DesktopNavbar;
