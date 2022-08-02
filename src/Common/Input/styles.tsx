import styled from 'styled-components/macro';

export const InputWrapper = styled.div`
	padding: 14px 24px;
	border-radius: ${({ theme }) => theme.border.input};
	background-color: ${({ theme }) => theme.colors.inputs.mainBg};
	border: solid 1px transparent;
	:focus-within {
		border: ${({ theme }) => theme.colors.inputs.border};
	}
	margin-bottom: 4px;
`;

export const Label = styled.h6`
	font-size: ${({ theme }) => theme.textFontSize.xs};
	color: ${({ theme }) => theme.colors.inputs.labelColor};
	line-height: 1.25;
`;

export const InputField = styled.input`
	font-size: ${({ theme }) => theme.textFontSize.base};
	line-height: 1.5;
	color: ${({ theme }) => theme.colors.inputs.textInputColor};
	width: 100%;
	::placeholder {
		color: ${({ theme }) => theme.colors.inputs.placeHolderColor};
	}
`;

export const ErrorMsg = styled.p`
	font-size: ${({ theme }) => theme.textFontSize.xs};
	color: ${({ theme }) => theme.colors.inputs.errorColor};

	line-height: 1.25;
	height: 18px;
	margin-bottom: 10px;
`;
