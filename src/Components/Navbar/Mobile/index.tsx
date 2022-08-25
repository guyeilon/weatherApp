import React, { useState } from 'react';
import useStore from '../../../App/store';
import { SvgCelsius, SvgFahrenheit, SvgMoon, SvgSun } from '../../../assets/Svg.styles';

import * as Styled from './styles';
import Modal from '../../../Common/Modal';

interface MobileNavbarProps {}

const MobileNavbar: React.FC<MobileNavbarProps> = () => {
	const store = useStore(state => state);
	const isDarkMode = store.theme === 'dark';
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<>
			<Styled.MobileContentWrapper>
				<Styled.MobileNavbar>
					<Styled.MenuBtn onClick={() => setIsExpanded(true)} />
				</Styled.MobileNavbar>
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
									isChecked={store.theme === 'dark'}
									leftSvg={<SvgSun height='24' width='24' />}
									rightSvg={<SvgMoon height='24' width='24' />}
									onClick={() => {
										store.toggleTheme(store.theme);
									}}
								/>
							</Styled.ThemeSwitcherWrapper>
							<Styled.DegreeSwitcherWrapper>
								<Styled.MenuText>Change degrees</Styled.MenuText>
								<Styled.DegreeSwitcher
									isChecked={store.degree === 'fahrenheit'}
									leftSvg={<SvgCelsius height='24' width='24' />}
									rightSvg={<SvgFahrenheit height='24' width='24' />}
									onClick={() => store.toggleDegree(store.degree)}
								/>
							</Styled.DegreeSwitcherWrapper>
						</Styled.SwitcherWrapper>
						<Styled.LogoutBtn svg={isDarkMode ? 'logout' : 'logoutDark'}>Log out</Styled.LogoutBtn>
					</Modal>
				)}
			</Styled.MobileContentWrapper>
		</>
	);
};

export default MobileNavbar;
