import styled from 'styled-components/macro';

export const WeeklyForecastWrapper = styled.div`
	width: 100%;
	margin-top: 88px;
	margin-bottom: 140px;

	border-radius: 20px;
	border: solid 1px #fff;

	display: grid;
	gap: 10px;

	grid-template-columns: repeat(5, 1fr);
	padding: 0 60px;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		grid-template-rows: repeat(5, min-content);
		grid-template-columns: none;
		padding: 0;
		gap: 8px;
		border: none;
		margin-bottom: 48px;
	}
`;

export const DailyData = styled.div<{}>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 40px;
	margin: 35px 0;
	/* width: 150px; */
	@media only screen and (${({ theme }) => theme.media.phone}) {
		flex-direction: row;
		margin: 0;
		align-items: stretch;
		justify-content: space-between;
		gap: 0px;
	}
`;

export const DayAndPhrase = styled.div`
	font-size: ${({ theme }) => theme.textFontSize.lg};
	color: ${({ theme }) => theme.colors.primary.text};
	white-space: nowrap;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		font-size: ${({ theme }) => theme.textFontSize.base};
		align-self: center;
	}
`;

export const IconInDesktop = styled.img`
	width: 30px;
	height: 30px;

	margin-right: 4px;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		display: none;
	}
`;
export const IconInMobile = styled.img`
	width: 30px;
	height: 30px;

	margin-right: 8px;
	align-self: center;

	@media only screen and (${({ theme }) => theme.media.abovePhone}) {
		display: none;
	}
`;

export const Temp = styled.div`
	font-size: ${({ theme }) => theme.textFontSize.xl};
	color: ${({ theme }) => theme.colors.primary.text};
	@media only screen and (${({ theme }) => theme.media.phone}) {
		font-size: ${({ theme }) => theme.textFontSize.base};
		align-self: center;
		margin-left: auto;
	}

	& > span {
		font-size: ${({ theme }) => theme.textFontSize.lg};
		@media only screen and (${({ theme }) => theme.media.phone}) {
			font-size: ${({ theme }) => theme.textFontSize.sm};
		}
	}
`;
