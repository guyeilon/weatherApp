import styled from 'styled-components/macro';
import { SvgMoonFlat, SvgSunFlat } from '../../assets/Svg.styles';

export const FiveDaysForecastWrapper = styled.div`
	width: 100%;

	margin-bottom: 100px;
	/* height: 181px; */

	border-radius: 20px;
	border: solid 1px #fff;

	display: grid;
	column-gap: 90px;

	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: min-content 250px 250px 66px;

	padding: 16px 100px;

	position: relative;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		column-gap: 40px;
		justify-content: center;
		grid-template-rows: min-content 100px 100px 66px;
		border: none;
		margin-bottom: 0;
	}
`;

export const DailyData = styled.div<{}>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Day = styled.div`
	font-size: ${({ theme }) => theme.textFontSize.lg};
	color: ${({ theme }) => theme.colors.primary.text};
	margin-bottom: 6px;
	margin-top: 19px;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		font-size: ${({ theme }) => theme.textFontSize.base};
		color: ${({ theme }) => theme.colors.primary.modalText};
		margin-top: 52px;
		margin-bottom: 0;
	}
`;
export const Date = styled.div`
	font-size: ${({ theme }) => theme.textFontSize.base};
	color: ${({ theme }) => theme.colors.primary.text};
	margin-bottom: 24px;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		font-size: ${({ theme }) => theme.textFontSize.xs};
		color: #bebebe;

		margin-bottom: 23px;
	}
`;

export const DayChart = styled.div`
	grid-column-start: 1;
	grid-column-end: 6;
	grid-row-start: 2;
	grid-row-end: 3;
	& svg {
		overflow: visible;
	}
	align-self: center;
	justify-self: center;
`;
export const NightChart = styled.div`
	grid-column-start: 1;
	grid-column-end: 6;
	grid-row-start: 3;
	grid-row-end: 4;
	& svg {
		overflow: visible;
	}
	align-self: center;
	justify-self: center;
`;

export const MoonIcon = styled(SvgMoonFlat)`
	grid-row-start: 4;
	grid-row-end: 5;
	width: 35px;
	height: 35px;

	align-self: start;
	justify-self: center;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		width: 16px;
		height: 16px;
	}
`;
export const SunIcon = styled(SvgSunFlat)`
	width: 35px;
	height: 35px;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		width: 16px;
		height: 16px;
	}
`;

export const TransparentGrid = styled.div`
	width: 100%;

	height: 100%;

	display: grid;
	column-gap: 90px;

	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 1fr 300px 300px 66px;

	padding: 16px 100px;

	position: absolute;
	top: 0;
	left: 0;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		display: none;
	}
`;

export const col1 = styled.div`
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 6;

	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 20px;
	}
`;
export const col2 = styled.div`
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row-start: 1;
	grid-row-end: 6;

	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 20px;
	}
`;
export const col3 = styled.div`
	grid-column-start: 3;
	grid-column-end: 4;
	grid-row-start: 1;
	grid-row-end: 6;

	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 20px;
	}
`;
export const col4 = styled.div`
	grid-column-start: 4;
	grid-column-end: 5;
	grid-row-start: 1;
	grid-row-end: 6;

	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 20px;
	}
`;
export const col5 = styled.div`
	grid-column-start: 5;
	grid-column-end: 6;
	grid-row-start: 1;
	grid-row-end: 6;

	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 20px;
	}
`;

export const Header = styled.h2`
	font-size: ${({ theme }) => theme.headingFontSize.h2};
	color: ${({ theme }) => theme.colors.primary.text};
	margin-top: 100px;
	margin-bottom: 24px;
	font-weight: bold;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		font-size: ${({ theme }) => theme.textFontSize.xl};
		color: ${({ theme }) => theme.colors.primary.modalText};
		margin-top: 0;
		margin-bottom: 0;
	}
`;
