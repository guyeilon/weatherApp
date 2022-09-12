import React, { useState } from 'react';
import { SvgCelsius, SvgFahrenheit, SvgMoon, SvgSun } from '../../assets/Svg.styles';
import * as Styled from './styles';
import Modal from '../../Common/Modal';
import { AnimatePresence } from 'framer-motion';
import { useLogin } from '../User/hooks/useLogin';
import { usePreferenceStore } from '../../zustand/store';

interface MobileNavbarProps {}

const MobileNavbar: React.FC<MobileNavbarProps> = () => {
	const { isDarkMode, isFahrenheit, toggleTheme, toggleDegree, theme, degree } = usePreferenceStore();
	const { logout } = useLogin();

	const [isExpanded, setIsExpanded] = useState(false);

	// console.log('MenuModal:', isExpanded);

	return (
		<>
			<Styled.MobileNavbar>
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
						<Styled.Header>Menu</Styled.Header>
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
