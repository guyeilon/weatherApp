import styled from 'styled-components/macro';

export const ContentWrapper = styled.div`
	margin-top: 64px;
	margin-left: 50px;
`;
export const CityName = styled.h1`
	font-size: ${({ theme }) => theme.headingFontSize.h1};
	color: ${({ theme }) => theme.colors.primary.text};
	line-height: 1.2;
`;
