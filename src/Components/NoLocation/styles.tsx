import styled from 'styled-components/macro';
import Logo from '../../assets/Logo';
import LogoTest from '../../assets/LogoTest';
import { SvgLocation, SvgTest } from '../../assets/Svg.styles';
import Button from '../../Common/Button';

export const NoLocationWrapper = styled.div`
	margin-top: 23px;
	margin: 0 auto;

	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media only screen and (${({ theme }) => theme.media.abovePhone}) {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const SvgNoLocation = styled(SvgLocation)`
	width: 120px;
	height: 120px;

	margin-bottom: 36px;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		display: none;
	}
`;
export const SvgLogo = styled(LogoTest)`
	width: 182px;
	height: 120px;
	margin: 0 auto;
	position: relative;
	margin-bottom: 67px;
	& svg {
		overflow: hidden;
		position: absolute;
		top: 10px;
		left: 15px;
	}

	@media only screen and (${({ theme }) => theme.media.abovePhone}) {
		display: none;
	}
`;

export const header = styled.h2`
	font-size: ${({ theme }) => theme.headingFontSize.h2};
	color: ${({ theme }) => theme.colors.primary.text};
	font-weight: bold;
	line-height: 1.25;
	text-shadow: ${({ theme }) => theme.boxShadows.text};

	margin-bottom: 16px;
`;
export const DesktopTxt = styled.p`
	font-size: ${({ theme }) => theme.textFontSize.base};
	color: ${({ theme }) => theme.colors.primary.text};

	width: 269px;

	line-height: 1.5;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		display: none;
	}
`;
export const MobileTxt = styled.p`
	font-size: ${({ theme }) => theme.textFontSize.base};
	color: ${({ theme }) => theme.colors.primary.text};

	width: 355px;

	line-height: 1.5;
	margin-bottom: 40px;
	@media only screen and (${({ theme }) => theme.media.abovePhone}) {
		display: none;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;
	max-width: 264px;
`;
export const LocationBtn = styled(Button)`
	/* width: fit-content; */
	margin-bottom: 16px;

	@media only screen and (${({ theme }) => theme.media.abovePhone}) {
		display: none;
	}
`;
export const SearchBtn = styled(Button)`
	/* width: fit-content; */

	@media only screen and (${({ theme }) => theme.media.abovePhone}) {
		display: none;
	}
`;
