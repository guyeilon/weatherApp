import React from 'react';
import { motion } from 'framer-motion';
import * as Styled from './style';

interface SwitchProps {
	leftSvg?: React.ReactNode;
	rightSvg?: React.ReactNode;
	isDark: boolean;
	onClick: () => void;
}

const spring = {
	type: 'spring',
	stiffness: 700,
	damping: 30,
	mass: 1.25,
};

const Switcher: React.FC<SwitchProps> = ({ leftSvg, rightSvg, onClick, isDark }) => {
	return (
		<>
			<Styled.Switch isDark={isDark} onClick={onClick}>
				<Styled.LeftSvgWrapper>{leftSvg}</Styled.LeftSvgWrapper>
				<Styled.RightSvgWrapper>{rightSvg}</Styled.RightSvgWrapper>
				<Styled.Handle as={motion.div} layout transition={spring} onClick={onClick} />
			</Styled.Switch>
		</>
	);
};

export default Switcher;
