import styled, { keyframes } from 'styled-components/macro';

const cloudAnimation = keyframes`
    0% { left:calc(100% - 100px)}
    100% { left: -200px}
`;

export const CloudsWrapper = styled.div`
	overflow: hidden;
	z-index: -1;
`;
export const CloudImg = styled.img<{ positionY: number; delayTime: number; speed: number }>`
	position: absolute;
	left: 100%;
	bottom: ${({ positionY }) => positionY}%;

	animation: ${cloudAnimation} ${({ speed }) => speed}s linear infinite ${({ delayTime }) => delayTime}s;
	width: ${({ speed }) => speed * 10}px;
`;
