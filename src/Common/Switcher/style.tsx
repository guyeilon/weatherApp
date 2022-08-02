import styled from 'styled-components/macro';
import { boolean } from 'yup';

export interface switchProps {
	isDark: boolean;
}

export const Switch = styled.div<switchProps>`
	position: relative;
	width: 75px;
	height: 42px;
	border: solid 1px #444e72;
	background-color: #fff;
	border-radius: 50px;
	display: flex;
	padding: 4px;

	cursor: pointer;
	justify-content: ${({ isDark }) => (isDark ? ` flex-start ` : `flex-end `)};
`;

export const Handle = styled.div`
	position: absolute;
	border-radius: 40px;
	width: 32px;
	height: 32px;
	background-color: #838baa;
`;

export const LeftSvgWrapper = styled.div`
	position: absolute;
	left: 8px;
	top: 8px;
	width: 24px;
	height: auto;
`;
export const RightSvgWrapper = styled.div`
	position: absolute;
	right: 8px;
	top: 8px;
	width: 24px;
	height: auto;
`;
