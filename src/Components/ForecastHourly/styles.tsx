import { RefObject } from 'react';
import styled from 'styled-components/macro';
import { SvgWind } from '../../assets/Svg.styles';

export const HourlyWrapper = styled.div`
	order: 3;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		order: 4;

		margin-top: 48px;
	}
`;

export const hourlyForecastCarousel = styled.div`
	/* overscroll-behavior-x: contain; */
	/* scroll-snap-type: x; */

	margin-bottom: 50px;
	overflow: hidden;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		margin-bottom: 0px;
	}
`;
export const InnerCarousel = styled.div`
	max-width: 100%;

	height: 293px;

	display: grid;
	gap: 68px;

	grid-template-columns: repeat(auto-fill, 1fr);

	grid-auto-flow: column;
	grid-auto-columns: 1fr;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		height: 138px;
		gap: 7px;
		max-width: 100vw;
	}
`;

export const Card = styled.div<{ selected: boolean }>`
	border-radius: 20px;
	background-color: rgba(255, 255, 255, 0.2);

	cursor: grab;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 24px;

	width: 152px;

	padding: 40px 0px;

	background-color: ${({ selected }) => (selected ? `rgba(255, 255, 255, 0.2)  ` : `transparent `)};

	@media only screen and (${({ theme }) => theme.media.phone}) {
		gap: 4px;
		padding: 16px 0px;
		width: 88px;
	}
`;

export const hourlyData = styled.div<{}>`
	align-self: center;
	justify-self: center;
`;

export const Hour = styled.div`
	font-size: ${({ theme }) => theme.textFontSize.lg};
	color: ${({ theme }) => theme.colors.primary.text};
	@media only screen and (${({ theme }) => theme.media.phone}) {
		font-size: ${({ theme }) => theme.textFontSize.sm};
	}
`;

export const Icon = styled.img`
	width: 30px;
	height: 30px;
	pointer-events: none;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		width: 16px;
		height: 16px;
		margin-bottom: 21px;
	}
`;

export const Temp = styled.div`
	font-size: ${({ theme }) => theme.textFontSize.xl};
	color: ${({ theme }) => theme.colors.primary.text};
	font-weight: bold;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		font-size: ${({ theme }) => theme.textFontSize.base};
	}

	& > span {
		font-size: ${({ theme }) => theme.textFontSize.lg};
		@media only screen and (${({ theme }) => theme.media.phone}) {
			font-size: ${({ theme }) => theme.textFontSize.sm};
		}
	}
`;

export const Wind = styled.div`
	font-size: ${({ theme }) => theme.textFontSize.sm};
	color: ${({ theme }) => theme.colors.primary.text};
	margin-left: 8px;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		margin-left: 0.5px;
		font-size: ${({ theme }) => theme.textFontSize.xxs};
	}
`;
export const WindIcon = styled(SvgWind)`
	width: 22px;
	height: 22px;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		width: 16px;
		height: 16px;
	}
`;

export const BtnWrapper = styled.div`
	display: flex;
	justify-content: end;
	align-items: flex-end;
	gap: 24px;
	margin-top: 16px;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		display: none;
	}
`;
