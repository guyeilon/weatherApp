import styled, { keyframes } from 'styled-components/macro';
import { DIFF_CLOUD_SIZE_PER_SPEED, MAX_CLOUD_SPEED, MIN_CLOUD_SIZE } from './types';

const cloudAnimation = keyframes`
    0% { left:100%	}
    100% { left: -300px}
`;

export const CloudsWrapper = styled.div`
	overflow: hidden;
	z-index: -900;
`;
export const CloudImg = styled.img<{ positionY: number; delayTime: number; speed: number }>`
	position: absolute;
	right: 100%;
	bottom: ${({ positionY }) => positionY}%;

	animation: ${cloudAnimation} ${({ speed }) => speed}s linear infinite ${({ delayTime }) => delayTime}s;
	/* width: ${({ speed }) => speed * 10}px; */
	width: ${({ speed }) => MIN_CLOUD_SIZE + (MAX_CLOUD_SPEED - speed) * DIFF_CLOUD_SIZE_PER_SPEED}px;
`;
