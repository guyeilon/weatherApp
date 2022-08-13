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

export const DailyData = styled.div<{ area: string }>`
	${({ area }) => {
		switch (area) {
			case 'day1':
				return `grid-area:day1`;
			case 'day2':
				return `grid-area:day2`;
			case 'day3':
				return `grid-area:day3`;
			case 'day4':
				return `grid-area:day4`;
		}
	}};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 40px;
`;

export const DayAndPhrase = styled.div`
	font-size: ${({ theme }) => theme.textFontSize.lg};
	color: ${({ theme }) => theme.colors.primary.text};
`;

export const Icon = styled.img`
	width: 30px;
	height: 30px;

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
