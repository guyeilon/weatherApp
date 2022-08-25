import styled, { css } from 'styled-components/macro';

const positionBottom = css`
	position: fixed;
	top: auto;
	right: auto;
	left: auto;
	margin: 0 auto;
	bottom: 0;
`;

export const Container = styled.div`
	z-index: ${({ theme }) => theme.zIndex.highestPriority};

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(20px);
`;

interface ModalProps {
	height: string;
	width: string;
	position: string | undefined;
	padding: string | undefined;
}

export const ModalWrapper = styled.div<ModalProps>`
	position: relative;
	width: ${({ width }) => width || '100vw'};
	height: ${({ height }) => height || '100vh'};
	padding: ${({ padding }) => padding || '40px'};

	${({ position }) => position === 'bottom' && positionBottom};
	/* display: flex;
	align-items: center;
	justify-content: center; */

	background-color: ${({ theme }) => theme.colors.modals.primaryBg};
	border-radius: ${({ theme }) => theme.border.modalUp};

	box-shadow: ${({ theme }) => theme.boxShadows.base};
`;
export const ModalContent = styled.div``;
