import React, { useState } from 'react';
import useStore from '../../../App/store';
import { SvgCelsius, SvgFahrenheit, SvgMoon, SvgSearch, SvgSun } from '../../../assets/Svg.styles';
import { motion, Variants, AnimatePresence } from 'framer-motion';

import * as Styled from './styles';
import MobileFooter from './Footer';

interface MobileNavbarProps {}

const MobileNavbar: React.FC<MobileNavbarProps> = () => {
	const store = useStore(state => state);
	const [toggle, setToggle] = useState(false);

	// animation:
	const overlayVariants: Variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};
	const panelVariants: Variants = {
		hidden: { y: 1000 },
		visible: { y: 0, transition: { type: 'spring', damping: 30, stiffness: 300 } },
	};

	return (
		<>
			<Styled.ContentWrapper>
				<Styled.MobileNavbar>
					<Styled.MenuBtn onClick={() => setToggle(!toggle)} />
				</Styled.MobileNavbar>
				<AnimatePresence>
					{toggle && (
						<Styled.MobileModalWrapper
							onClick={() => setToggle(!toggle)}
							as={motion.div}
							initial='hidden'
							animate='visible'
							exit='hidden'
							variants={overlayVariants}>
							<Styled.mobileMenu
								onClick={(e: any) => e.stopPropagation()}
								as={motion.div}
								initial='hidden'
								animate='visible'
								exit='hidden'
								variants={panelVariants}>
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
								<Styled.LogoutBtn>Log out</Styled.LogoutBtn>
							</Styled.mobileMenu>
						</Styled.MobileModalWrapper>
					)}
				</AnimatePresence>

				<MobileFooter />
			</Styled.ContentWrapper>
		</>
	);
};

export default MobileNavbar;
