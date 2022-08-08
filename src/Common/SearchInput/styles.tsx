import styled from 'styled-components/macro';

export const InputWrapper = styled.div`
	flex-basis: 100px;

	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.inputs.mainBg};
	border-radius: ${({ theme }) => theme.border.base};

	flex: 1;
	max-width: 100%;

	order: 4;
`;
export const searchInput = styled.input`
	font-size: ${({ theme }) => theme.textFontSize.base};
	font-weight: bold;
	line-height: 1.2;
	width: 100%;
	color: ${({ theme }) => theme.colors.inputs.textInputColor};

	::placeholder {
		color: ${({ theme }) => theme.colors.inputs.placeHolderColor};
	}
	border-radius: ${({ theme }) => theme.border.base};
	padding: 16px 24px;
`;
