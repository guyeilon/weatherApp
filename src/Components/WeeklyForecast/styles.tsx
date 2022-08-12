import styled from 'styled-components/macro';

export const WeeklyForecastWrapper = styled.div`
	width: 100%;
	margin-top: 88px;
	height: 181px;

	border-radius: 20px;
	border: solid 1px #fff;

	display: grid;

	grid-template-columns: 70px repeat(1fr, 4) 70px;
	grid-template-areas: '. day1 day2 day3 day4 .';
`;

export const DailyData = styled.div`
	grid-area: day1;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const DayAndPhrase = styled.div`
	font-size: ${({ theme }) => theme.textFontSize.lg};
	color: ${({ theme }) => theme.colors.primary.text}; ;
`;
