import styled from 'styled-components/macro';

export const NoLocationWrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	margin: 0 auto;

	width: 269px;
	text-align: center;
`;

export const header = styled.h2`
	font-size: ${({ theme }) => theme.headingFontSize.h2};
	color: ${({ theme }) => theme.colors.primary.text};
	font-weight: bold;
	line-height: 1.25;

	margin-top: 36px;
	margin-bottom: 16px;
`;
export const Text = styled.p`
	font-size: ${({ theme }) => theme.textFontSize.base};
	color: ${({ theme }) => theme.colors.primary.text};

	line-height: 1.5;
`;
