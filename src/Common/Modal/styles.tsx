import styled, { css } from 'styled-components/macro';

const positionBottom = css`
	position: fixed;
	top: auto;
	right: auto;
	left: auto;
	margin: 0 auto;
	bottom: 0;
`;
const positionTop = css`
	position: fixed;
	top: 0;
	right: auto;
	left: auto;
`;
const blurAll = css`
	background-color: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(4px);

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;
const blurMain = css`
	background-color: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(4px);

	position: fixed;
	top: 94px;
	left: 0;
	right: 0;
	bottom: 0;
`;

export const Container = styled.div<{ blur?: string }>`
	z-index: ${({ theme }) => theme.zIndex.highestPriority};

	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;

	${({ blur }) => blur === 'all' && blurAll};
	${({ blur }) => blur === 'main' && blurMain};
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
	${({ position }) => position === 'top' && positionTop};

	background-color: ${({ theme }) => theme.colors.modals.primaryBg};
	border-radius: ${({ theme, position }) => position === 'bottom' && theme.border.modalUp};
	border-radius: ${({ theme, position }) => position === 'top' && theme.border.modal};

	box-shadow: ${({ theme }) => theme.boxShadows.base};
`;
export const ModalContent = styled.div``;
