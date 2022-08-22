import styled from 'styled-components/macro';

export const WeeklyForecastWrapper = styled.div`
	width: 100%;
	margin-top: 88px;
	/* height: 181px; */

	border-radius: 20px;
	border: solid 1px #fff;

	display: grid;
	gap: 10px;

	grid-template-columns: repeat(5, 1fr);
	padding: 0 60px;
`;

export const DailyData = styled.div<{}>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 40px;
	margin: 35px 0;
	/* width: 150px; */
`;

export const DayAndPhrase = styled.div`
	font-size: ${({ theme }) => theme.textFontSize.lg};
	color: ${({ theme }) => theme.colors.primary.text};
	white-space: nowrap;
`;

export const Icon = styled.img`
	width: 30px;
	height: 30px;

	margin-right: 4px;

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
