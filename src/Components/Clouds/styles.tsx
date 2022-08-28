import styled, { keyframes } from 'styled-components/macro';
import { SvgCloud } from '../../assets/Svg.styles';

const cloudAnimation = keyframes`
    0% { left:100%}
    100% { left: -100px}
`;

export const CloudsWrapper = styled.div``;
export const CloudImg = styled.img<{ positionY: number; delayTime: number; speed: number }>`
	position: absolute;
	left: 100%;
	top: ${({ positionY }) => positionY}%;
	z-index: 1;
	animation: ${cloudAnimation} ${({ speed }) => speed}s linear infinite ${({ delayTime }) => delayTime}s;
	width: ${({ speed }) => speed * 10}px;
`;
