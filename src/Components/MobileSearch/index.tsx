import React from 'react';
import { AnimatePresence } from 'framer-motion';
import * as Styled from './styles';
import Modal from '../../Common/Modal';
import useStore from '../../App/store';

interface MobileSearchProps {
	setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
	isExpanded: boolean;
}

const MobileSearch: React.FC<MobileSearchProps> = ({ setIsExpanded, isExpanded }) => {
	const store = useStore(state => state);
	const isDarkMode = store.theme === 'dark';
	return (
		<AnimatePresence>
			<Modal
				padding='40px 30px'
				width='100%'
				height='80%'
				position='bottom'
				isModalOpen={isExpanded}
				closeModal={() => setIsExpanded(false)}>
				<Styled.ArrowBtn onClick={() => setIsExpanded(false)} svg={isDarkMode ? 'whiteArrow' : 'arrow'} />
				<Styled.InputWrapper>
					<Styled.Input />
				</Styled.InputWrapper>
			</Modal>
		</AnimatePresence>
	);
};
export default MobileSearch;
