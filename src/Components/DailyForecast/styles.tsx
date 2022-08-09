import styled from 'styled-components/macro';

export const ContentWrapper = styled.div`
	margin-top: 64px;
	margin-left: 50px;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		text-align: center;
		margin: 0 auto;
	}
`;
export const CityName = styled.h1`
	font-size: ${({ theme }) => theme.headingFontSize.h1};
	color: ${({ theme }) => theme.colors.primary.text};
	line-height: 1.2;
`;

export const Icon = styled.img`
	width: 180px;
	height: 180px;
`;
export const AllDayTemp = styled.div`
	display: flex;
	align-items: flex-end;
	font-size: 100px;
	color: ${({ theme }) => theme.colors.primary.text};
	line-height: 1.2;
	align-self: flex-end;
	vertical-align: bottom;

	& > div {
		font-size: 45px;
		padding-bottom: 22px;
	}
`;
export const NightTemp = styled.p`
	font-size: 45px;
	color: ${({ theme }) => theme.colors.primary.text};
	line-height: 1.2;
	align-self: flex-end;
`;
