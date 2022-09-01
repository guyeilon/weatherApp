import React, { ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import * as Styled from './styles';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useCloseModalIfClickedOutside } from '../../hooks/useCloseIfClickedOutside';
import { UsePreventScrollOutsideModal } from '../../hooks/usePreventScrollOutsideModal';
import { useGetAnimationByPosition } from './hooks/useGetAnimationByPosition';

export interface ModalProps {
	children?: ReactNode;
	height: string;
	width: string;
	position: string;
	isModalOpen: boolean;
	closeModal: () => void;
	padding?: string | undefined;
	blur?: string | undefined;
	useCloseModal?: boolean | undefined;
}

const Modal: React.FC<ModalProps> = ({
	children,
	height,
	width,
	position,
	isModalOpen,
	closeModal,
	padding,
	blur = 'all',
	useCloseModal = true,
}) => {
	const { overlayVariants, panelVariants } = useGetAnimationByPosition(position);

	const modalRef = useRef<HTMLDivElement>(null);
	const WrapperRef = useRef<HTMLDivElement>(null);

	useCloseModalIfClickedOutside({
		isModalOpen: isModalOpen,
		modalRef: modalRef,
		closeModalFunction: closeModal,
		useCloseModal: useCloseModal,
	});

	UsePreventScrollOutsideModal(isModalOpen);

	const modalRoot = document.getElementById('modal') as HTMLElement;

	return ReactDOM.createPortal(
		<AnimatePresence>
			<Styled.Container
				blur={blur}
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
		</AnimatePresence>,
		modalRoot
	);
};

export default Modal;
