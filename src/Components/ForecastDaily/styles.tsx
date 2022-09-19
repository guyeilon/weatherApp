import styled from 'styled-components/macro';
import Button from '../../Common/Button';

export const DailyForecastContainer = styled.div`
	order: 1;
	display: flex;
	flex-direction: row;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		text-align: center;

		justify-content: center;
	}
`;
export const CityName = styled.h1`
	font-size: ${({ theme }) => theme.headingFontSize.h1};
	color: ${({ theme }) => theme.colors.primary.text};
	line-height: 1.2;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		font-size: ${({ theme }) => theme.headingFontSize.h2};
	}
`;
export const DailyTempIconWrapper = styled.div`
	display: flex;
	align-items: center;

	position: relative;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		justify-content: center;
	}
`;

export const Icon = styled.img`
	width: 180px;
	height: 180px;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		width: 80px;
		height: 80px;
	}
`;

export const DailyTempWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const DayTemp = styled.div`
	font-size: 130px;
	color: ${({ theme }) => theme.colors.primary.text};

	align-self: flex-end;

	position: relative;
	bottom: -25px;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		font-size: 80px;
		bottom: -10px;
	}

	& > span {
		font-size: 72px;
		position: relative;
		top: -35px;

		@media only screen and (${({ theme }) => theme.media.phone}) {
			font-size: 48px;
			top: -20px;
		}
	}
`;
export const NightTemp = styled.div`
	font-size: 45px;
	color: ${({ theme }) => theme.colors.primary.text};
	line-height: 1.2;

	position: relative;
	bottom: -45px;
	right: 25px;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		font-size: 36px;
		bottom: -23px;
		right: 17px;
	}

	& > span {
		font-size: 32px;
		position: relative;
		top: -5px;

		@media only screen and (${({ theme }) => theme.media.phone}) {
			font-size: 24px;
		}
	}
`;

export const Phrase = styled.div`
	margin-top: 16px;
	color: ${({ theme }) => theme.colors.primary.text};
	text-shadow: ${({ theme }) => theme.boxShadows.text};
	font-weight: bold;
	font-size: ${({ theme }) => theme.textFontSize.xl};

	line-height: 1.25;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		font-size: ${({ theme }) => theme.textFontSize.lg};
	}
`;

export const Date = styled.div`
	margin-top: 16px;
	color: ${({ theme }) => theme.colors.primary.text};
	text-shadow: ${({ theme }) => theme.boxShadows.text};

	font-size: ${({ theme }) => theme.textFontSize.lg};

	line-height: 1.25;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		font-size: ${({ theme }) => theme.textFontSize.sm};
	}
`;

export const FavBtn = styled(Button)`
	margin-left: auto;
	align-self: flex-end;
	max-width: 213px;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		display: none;
	}
`;
export const FavBtnMobile = styled(Button)`
	position: absolute;
	top: -30px;
	left: -30px;
	/* width: 34px; */

	@media only screen and (${({ theme }) => theme.media.abovePhone}) {
		display: none;
	}
`;
