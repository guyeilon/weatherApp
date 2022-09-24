import React, { useState } from 'react';
import { SvgCelsius, SvgFahrenheit, SvgMoon, SvgSun } from '../../assets/Svg.styles';
import * as Styled from './styles';
import Modal from '../../Common/Modal';
import { AnimatePresence } from 'framer-motion';

import { useLogin } from '../User/hooks/useLogin';
import { usePreferenceStore } from '../../zustand/store';
import { useForecast } from '../../zustand/hooks/useForecast';
import { useAddRemoveFavorites } from '../Favorites/hooks/useAddRemoveFavorites';
import { useIsAddedToFav } from '../Favorites/hooks/useIsAddedToFav';
import { useLocation } from 'react-router-dom';
import { useFavorites } from '../../zustand/hooks/useFavorites';

interface MobileNavbarProps {}

const MobileNavbar: React.FC<MobileNavbarProps> = () => {
	const { isDarkMode, isFahrenheit, toggleTheme, toggleDegree, theme, degree } = usePreferenceStore();
	const { logout } = useLogin();
	const { cityData } = useForecast();
	const { addRemoveFavorites } = useAddRemoveFavorites();
	const isAddedToFav = useIsAddedToFav(cityData!);

	const [isExpanded, setIsExpanded] = useState(false);
	const location = useLocation();

	const currLocation = location.pathname;
	const isFavPage = currLocation === '/favorites';

	return (
		<>
			<Styled.MobileNavbar>
				{isFavPage ? (
					<Styled.Header>Favorites</Styled.Header>
				) : (
					<Styled.FavoritesBtn
						svg={isAddedToFav ? 'favoritesFull' : 'favorites'}
						onClick={() => {
							addRemoveFavorites(cityData!);
							console.log('clicked');
						}}
					/>
				)}
				<Styled.MenuBtn onClick={() => setIsExpanded(true)} />
			</Styled.MobileNavbar>
			<AnimatePresence>
				{isExpanded && (
					<Modal
						padding='40px 30px'
						width='100%'
						height='416px'
						position='bottom'
						isModalOpen={isExpanded}
						closeModal={() => setIsExpanded(false)}>
						<Styled.MenuHeader>Menu</Styled.MenuHeader>
						<Styled.SwitcherWrapper>
							<Styled.ThemeSwitcherWrapper>
								<Styled.MenuText>Change mode</Styled.MenuText>
								<Styled.ThemeSwitcher
									isChecked={isDarkMode}
									leftSvg={<SvgSun height='24' width='24' />}
									rightSvg={<SvgMoon height='24' width='24' />}
									onClick={() => toggleTheme(theme)}
								/>
							</Styled.ThemeSwitcherWrapper>
							<Styled.DegreeSwitcherWrapper>
								<Styled.MenuText>Change degrees</Styled.MenuText>
								<Styled.DegreeSwitcher
									isChecked={isFahrenheit}
									leftSvg={<SvgCelsius height='24' width='24' />}
									rightSvg={<SvgFahrenheit height='24' width='24' />}
									onClick={() => {
										toggleDegree(degree);
									}}
								/>
							</Styled.DegreeSwitcherWrapper>
						</Styled.SwitcherWrapper>
						<Styled.LogoutBtn svg={isDarkMode ? 'logout' : 'logoutDark'} onClick={() => logout()}>
							Log out
						</Styled.LogoutBtn>
					</Modal>
				)}
			</AnimatePresence>
		</>
	);
};

export default MobileNavbar;
