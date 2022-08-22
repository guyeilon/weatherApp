import { RefObject } from 'react';
import styled from 'styled-components/macro';

export const hourlyForecastWrapper = styled.div`
	/* overscroll-behavior-x: contain; */
	/* scroll-snap-type: x; */

	margin-bottom: 50px;
	overflow: hidden;

	/* cursor: grab; */
`;

export const Card = styled.div<{ selected: boolean }>`
	border-radius: 20px;
	background-color: rgba(255, 255, 255, 0.2);
	/* background-color: transparent; */
	cursor: grab;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 24px;

	width: 152px;

	padding: 40px 0px;

	/* scroll-snap-align: end; */

	background-color: ${({ selected }) => (selected ? `rgba(255, 255, 255, 0.2)  ` : `transparent `)};
`;

export const hourlyData = styled.div<{}>`
	align-self: center;
	justify-self: center;
`;

export const Hour = styled.div`
	font-size: ${({ theme }) => theme.textFontSize.lg};
	color: ${({ theme }) => theme.colors.primary.text};
`;

export const Icon = styled.img`
	width: 30px;
	height: 30px;
	pointer-events: none;

	@media only screen and (${({ theme }) => theme.media.phone}) {
	}
`;

export const Temp = styled.div`
	font-size: ${({ theme }) => theme.textFontSize.xl};
	color: ${({ theme }) => theme.colors.primary.text};

	& > span {
		font-size: ${({ theme }) => theme.textFontSize.lg};
	}
`;

export const Wind = styled.div`
	font-size: ${({ theme }) => theme.textFontSize.sm};
	color: ${({ theme }) => theme.colors.primary.text};
	margin-left: 8px;
`;

export const BtnWrapper = styled.div`
	display: flex;
	justify-content: end;
	align-items: flex-end;
	gap: 24px;
	margin-top: 16px;
`;

export const Carousel = styled.div`
	max-width: 100%;

	height: 293px;

	display: grid;
	gap: 68px;

	grid-template-columns: repeat(auto-fill, 1fr);

	grid-auto-flow: column;
	grid-auto-columns: 1fr;
`;
