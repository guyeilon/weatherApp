import styled from 'styled-components/macro';
import { SvgNavbarLogo } from '../../assets/Svg.styles';
import Button from '../../Common/Button';

export const NavbarWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.primary.background};

	width: 100%;
	height: 94px;

	display: flex;
	flex-direction: row;
	align-content: flex-start;

	justify-content: center;
	align-items: center;

	padding: 19px 50px;
`;

export const Logo = styled(SvgNavbarLogo)`
	/* flex-basis: 100%; */
	display: flex;
	align-items: center;
	width: 85.8px;
	height: 56px;
	flex: 1;
`;
export const NavbarBtn = styled(Button)`
	flex: 1;
`;

export const searchInput = styled.input`
	font-size: ${({ theme }) => theme.textFontSize.base};
	line-height: 1.5;
	color: ${({ theme }) => theme.colors.inputs.textInputColor};
	width: 372px;
	height: 54px;
	::placeholder {
		color: ${({ theme }) => theme.colors.inputs.placeHolderColor};
	}
	background-color: ${({ theme }) => theme.colors.inputs.mainBg};
	border-radius: ${({ theme }) => theme.border.base};
	/* padding: 12px 24px; */
	margin: 1px 40px 15px 56px;
	flex: 1;
`;
