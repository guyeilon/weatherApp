import React from 'react';
import { motion } from 'framer-motion';

import * as S from './style';
interface SwitchProps {
	leftSvg?: React.ReactNode;
	rightSvg?: React.ReactNode;
	id: string;
	themeToggler: () => void;
}

const spring = {
	type: 'spring',
	stiffness: 700,
	damping: 30,
};

const SwitchButton: React.FC<SwitchProps> = ({ leftSvg, rightSvg, id, themeToggler }) => {
	return (
		<>
			<S.CheckBoxWrapper>
				<S.LeftSvgWrapper>{leftSvg}</S.LeftSvgWrapper>
				<S.RightSvgWrapper>{rightSvg}</S.RightSvgWrapper>
				<S.CheckBox
					id={id}
					type='checkbox'
					onClick={themeToggler}
					checked={window.localStorage.getItem('theme') === 'dark'}
					readOnly
					onChange={() => false}
				/>

				<S.CheckBoxLabel htmlFor={id} />
			</S.CheckBoxWrapper>
		</>
	);
};

export default SwitchButton;
