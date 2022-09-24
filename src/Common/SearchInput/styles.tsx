import styled from 'styled-components/macro';
import { SvgSearch } from '../../assets/Svg.styles';

export const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	flex: 1;
	max-width: 100%;

	position: relative;
`;
export const searchInput = styled.input`
	font-size: ${({ theme }) => theme.textFontSize.base};
	font-weight: bold;
	line-height: 1.2;
	width: 100%;
	color: ${({ theme }) => theme.colors.inputs.textInputColor};
	background-color: ${({ theme }) => theme.colors.inputs.mainBg};

	::placeholder {
		color: ${({ theme }) => theme.colors.inputs.placeHolderColor};
	}
	border-radius: ${({ theme }) => theme.border.base};
	padding: 16px 24px;
`;

export const SearchIcon = styled(SvgSearch)`
	position: absolute;

	right: 24px;
`;
