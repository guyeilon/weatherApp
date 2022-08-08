import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import * as Styled from './styles';

interface MobileSearchProps {
	setToggle: React.Dispatch<React.SetStateAction<boolean>>;
	toggle: boolean;
}

const MobileSearch: React.FC<MobileSearchProps> = ({ setToggle, toggle }) => {
	// animation:
	const overlayVariants: Variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};
	const ModalVariants: Variants = {
		hidden: { y: 1000 },
		visible: { y: 0, transition: { type: 'spring', damping: 30, stiffness: 300 } },
	};
	return (
		<AnimatePresence>
			<Styled.SearchWrapper
				onClick={() => setToggle(!toggle)}
				as={motion.div}
				initial='hidden'
				animate='visible'
				exit='hidden'
				variants={overlayVariants}>
				<Styled.SearchModal
					as={motion.div}
					initial='hidden'
					animate='visible'
					exit='hidden'
					onClick={(e: any) => e.stopPropagation()}
					variants={ModalVariants}>
					<Styled.ArrowBtn onClick={() => setToggle(!toggle)} />
					<Styled.InputWrapper>
						<Styled.Input />
					</Styled.InputWrapper>
				</Styled.SearchModal>
			</Styled.SearchWrapper>
		</AnimatePresence>
	);
};
export default MobileSearch;
