import React, { ReactNode, useEffect, useRef } from 'react';
import * as Styled from './styles';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useCloseModalIfClickedOutside } from '../../hooks/useCloseIfClickedOutside';
import { UsePreventScrollOutsideModal } from '../../hooks/usePreventScrollOutsideModal';

export interface ModalProps {
	children?: ReactNode;
	height: string;
	width: string;
	position?: string | undefined;
	isModalOpen: boolean;
	closeModal: () => void;
	padding?: string | undefined;
}
// animation:
const overlayVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};
const panelVariants: Variants = {
	hidden: { y: 1000 },
	visible: { y: 0, transition: { type: 'spring', damping: 30, stiffness: 300 } },
};

const Modal: React.FC<ModalProps> = ({ children, height, width, position, isModalOpen, closeModal, padding }) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const WrapperRef = useRef<HTMLDivElement>(null);

	useCloseModalIfClickedOutside({
		isModalOpen: isModalOpen,
		modalRef: modalRef,
		closeModalFunction: closeModal,
	});

	UsePreventScrollOutsideModal(isModalOpen);

	return (
		<AnimatePresence>
			<Styled.Container
				as={motion.div}
				initial='hidden'
				animate='visible'
				exit='hidden'
				variants={overlayVariants}
				ref={WrapperRef}>
				<Styled.ModalWrapper
					padding={padding}
					position={position}
					width={width}
					height={height}
					ref={modalRef}
					as={motion.div}
					initial='hidden'
					animate='visible'
					exit='hidden'
					variants={panelVariants}>
					<Styled.ModalContent>{children}</Styled.ModalContent>
				</Styled.ModalWrapper>
			</Styled.Container>
		</AnimatePresence>
	);
};

export default Modal;
