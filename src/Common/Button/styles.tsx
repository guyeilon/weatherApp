import styled, { css } from 'styled-components/macro';
import { SvgFav } from '../../assets/Svg.styles';

const buttonCustomProps = css`
	--mainBg: ${({ theme }) => theme.colors.buttons.primary.bg};
	--mainBgDisabled: ${({ theme }) => theme.colors.buttons.primary.bgDisabled};
	--mainBgHover: ${({ theme }) => theme.colors.buttons.primary.bgHover};
	--secondaryBg: ${({ theme }) => theme.colors.buttons.secondary.bg};
	--secondaryBgHover: ${({ theme }) => theme.colors.buttons.secondary.bgHover};
	--secondaryBgDisabled: ${({ theme }) => theme.colors.buttons.secondary.bgDisabled};
	--mainTextColor: ${({ theme }) => theme.colors.buttons.primary.textColor};
	--secondaryTextColor: ${({ theme }) => theme.colors.buttons.secondary.textColor};
	--mainTextColorDisable: ${({ theme }) => theme.colors.buttons.primary.textColorDisable};
	--secondaryTextColorDisable: ${({ theme }) => theme.colors.buttons.secondary.textColorDisable};
	--primaryPadding: 1.6rem 0rem;
	--secondaryPadding: 1.6rem 2.4rem;
	--fontSize: ${({ theme }) => theme.textFontSize.base};
	--fontWeight: bold;
	--lineHeight: 1.2;
	--borderRadius: ${({ theme }) => theme.border.button};
	--outlineColor: rgb(131, 238, 255);
	--boxShadow: ${({ theme }) => theme.boxShadows.button};
	--LinkColor: ${({ theme }) => theme.colors.buttons.links.textColor};
`;

const defaultButton = css`
	/* display */
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	/* styling */
	position: relative;

	cursor: pointer;
	white-space: nowrap;

	width: 100%;

	/* typography */
	font-family: inherit;
	font-size: var(--fontSize);
	line-height: var(--lineHeight);
	font-weight: var(--fontWeight);

	/* animation */
	transition: 0.3s all ease;
`;
const loginButton = css`
	padding: var(--primaryPadding);
	color: var(--mainTextColor);
	background-image: var(--mainBg);
	border-radius: var(--borderRadius);
	word-break: break-all;
	word-wrap: break-word;
`;
const secondary = css`
	padding: var(--secondaryPadding);
	background-color: var(--secondaryBg);
	color: var(--secondaryTextColor);
	border-radius: var(--borderRadius);
	box-shadow: var(--boxShadow);
`;

const hoveredLoginButton = css`
	background-image: var(--mainBgHover);
`;
const hoveredSecondary = css`
	background-color: var(--secondaryBgHover);
`;
const hoveredLinkButton = css`
	/* font-weight: bold; */
`;
const focusedButton = css`
	&:focus-visible {
		box-shadow: 0px 0px 3px 6px var(--outlineColor);
	}
`;
const disabledLoginButton = css`
	background-image: var(--mainBgDisabled);
	color: var(--mainTextColorDisable);
	cursor: default;
`;
const disabledSecondary = css`
	background-color: var(--secondaryBgDisabled);
	color: var(--secondaryTextColorDisable);
	border: solid 1px var(--secondaryTextColorDisable);
	box-shadow: none;
	cursor: default;
`;
const ghostButton = css`
	background-color: var(--secondaryBgDisabled);
	color: var(--secondaryTextColorDisable);
	border: solid 1px var(--secondaryTextColorDisable);
	/* box-shadow: var(--boxShadow); */
	/* padding: var(--secondaryPadding); */

	border-radius: var(--borderRadius);
`;

const linkButton = css`
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	color: var(--LinkColor);
	text-decoration: underline;
`;

const navbarButton = css`
	color: var(--mainTextColor);
`;
const MobileFooterButton = css`
	color: var(--mainTextColor);
	flex-direction: column;
	font-weight: normal;
	font-size: ${({ theme }) => theme.textFontSize.xs};
	line-height: 1.25;
`;

const activeButton = css`
	transform: scale(0.97);
`;

interface StyledButtonProps {
	secondary?: boolean;
	ghost?: boolean;
	login?: boolean;
	disabled?: boolean;
	navbar?: boolean;
	footer?: boolean;
	noHover?: boolean;
	as?: React.ElementType;
}
export const IconWrapper = styled.div`
	margin-right: 8px;
`;
export const FavIcon = styled(SvgFav).attrs(props => ({
	outlinedark: 'true',
	width: '24',
	height: '24',
}))`
	display: flex;
`;

export const BTN = styled.button<StyledButtonProps>`
	${buttonCustomProps};
	${defaultButton}

	&:hover {
		${p =>
			!p.disabled &&
			!p.secondary &&
			!p.navbar &&
			!p.as &&
			!p.footer &&
			!p.noHover &&
			!p.ghost &&
			hoveredLoginButton};
		${p => !p.disabled && p.secondary && hoveredSecondary};
		${p => p.as && hoveredLinkButton};
	}

	&:focus {
		${p => !p.footer && !p.navbar && !p.disabled && !p.secondary && focusedButton};
	}

	&:active {
		${p => !p.footer && !p.navbar && !p.disabled && activeButton};
	}

	${p => p.login && loginButton};
	${p => p.secondary && secondary}
	${p => p.as && linkButton}
	${p => p.navbar && navbarButton}
	${p => p.footer && MobileFooterButton}
	${p => p.ghost && ghostButton}

	&:disabled {
		${p => p.login && disabledLoginButton};
		${p => p.secondary && disabledSecondary};
	}

	${IconWrapper} {
		display: ${props =>
			(props.secondary || props.as || props.navbar || props.footer) && !props.disabled ? `block  ` : `none `};
		margin-right: ${props => props.footer && `0`};
	}
`;